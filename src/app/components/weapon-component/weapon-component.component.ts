import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { WeaponServiceService } from 'src/app/services/weapon-service.service';
import { CustomActionsService } from 'src/app/scripts/custom-actions.service';
import {
  ValorantWeaponShopDto,
  ValorantWeaponsApiDto,
  ValorantWeaponSkinDto,
  WeaponCategorySectionViewModel,
  buildWeaponCategorySections,
} from 'src/app/models/valorant-weapon.model';

@Component({
  selector: 'app-weapon-component',
  templateUrl: './weapon-component.component.html',
  styleUrls: ['./weapon-component.component.css'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95) translateY(10px)' }),
        animate(
          '250ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'scale(0.95) translateY(10px)' })
        ),
      ]),
    ]),
  ],
})
export class WeaponComponentComponent implements OnInit {

  protected armas: ValorantWeaponShopDto[] = [];
  protected categorySections: WeaponCategorySectionViewModel[] = [];
  protected loadingWeapons = true;
  protected loadFailedWeapons = false;
  protected readonly skeletonSlots = [0, 1, 2, 3, 4, 5];
  protected divAtiva = '';
  protected skinSearchQuery = '';

  constructor(
    protected weaponService: WeaponServiceService,
    protected customActionsService: CustomActionsService
  ) {}

  ngOnInit(): void {
    this.getArmas();
  }

  getArmas(): void {
    this.loadingWeapons = true;
    this.weaponService.getArmas().subscribe({
      next: (response: ValorantWeaponsApiDto) => {
        this.armas = response.data.filter((a) => a.shopData);
        this.categorySections = buildWeaponCategorySections(this.armas);
        this.loadingWeapons = false;
      },
      error: () => {
        this.loadFailedWeapons = true;
        this.loadingWeapons = false;
      },
    });
  }

  showDiv(uuid: string): void {
    const next = this.divAtiva === uuid ? '' : uuid;
    if (next.length > 0) {
      this.skinSearchQuery = '';
    }
    this.divAtiva = next;
  }

  onSkinSearchInput(event: Event): void {
    const el = event.target as HTMLInputElement;
    this.skinSearchQuery = el.value;
  }

  clearSkinSearch(): void {
    this.skinSearchQuery = '';
  }

  protected filteredSkins(arma: ValorantWeaponShopDto): ValorantWeaponSkinDto[] {
    const q = this.skinSearchQuery.trim().toLowerCase();
    if (q.length === 0) {
      return arma.skins;
    }
    return arma.skins.filter((s) => s.displayName.toLowerCase().includes(q));
  }

  protected skinDisplayLabel(skin: ValorantWeaponSkinDto, weaponName: string): string {
    const escaped = weaponName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\s+${escaped}\\s*$`, 'i');
    const trimmed = skin.displayName.replace(re, '').trim();
    if (trimmed.length > 0) {
      return trimmed;
    }
    return skin.displayName;
  }

  protected revealDelay(sectionIndex: number, weaponIndex: number): number {
    return sectionIndex * 70 + weaponIndex * 38;
  }

  executeCustomAction(event: MouseEvent): void {
    this.customActionsService.clickButton(event.currentTarget);
  }
}
