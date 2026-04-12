export interface ValorantWeaponSkinChromaDto {
  fullRender: string | null;
  displayIcon: string | null;
}

export interface ValorantWeaponSkinDto {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  chromas?: ValorantWeaponSkinChromaDto[] | null;
}

export function skinGalleryImageUrl(skin: ValorantWeaponSkinDto): string | null {
  const chromas = skin.chromas;
  if (chromas && chromas.length > 0) {
    for (const c of chromas) {
      if (c.fullRender) {
        return c.fullRender;
      }
    }
  }
  if (skin.displayIcon) {
    return skin.displayIcon;
  }
  return null;
}

export function skinCardCanExpand(skin: ValorantWeaponSkinDto): boolean {
  return skin.displayIcon !== null && skin.displayIcon.length > 0;
}

export interface ValorantWeaponShopDto {
  uuid: string;
  displayName: string;
  displayIcon: string;
  shopData: { category: string; cost: number };
  skins: ValorantWeaponSkinDto[];
}

export interface ValorantWeaponsApiDto {
  data: ValorantWeaponShopDto[];
}

export interface WeaponCategorySectionViewModel {
  sectionId: string;
  title: string;
  description: string;
  iconClass: string;
  weapons: ValorantWeaponShopDto[];
}

const WEAPON_CATEGORY_ORDER: readonly string[] = [
  'Pistols',
  'SMGs',
  'Shotguns',
  'Rifles',
  'Sniper Rifles',
  'Heavy Weapons',
];

const WEAPON_CATEGORY_DESCRIPTION: Readonly<Record<string, string>> = {
  Pistols: 'Sidearms for pistol rounds, saves, and clutch swaps when credits are tight.',
  SMGs: 'Mobile mid-range tools that reward aggressive peeks and fast repositioning.',
  Shotguns: 'High burst at short range—ideal for tight angles and site takes.',
  Rifles: 'The default workhorse class: versatile rifles that anchor most buy rounds.',
  'Sniper Rifles': 'Long sightlines and pick potential—space control through precision.',
  'Heavy Weapons': 'Suppressive fire and area denial for stalled executes and post-plant.',
};

const WEAPON_CATEGORY_ICON: Readonly<Record<string, string>> = {
  Pistols: 'fa-solid fa-crosshairs',
  SMGs: 'fa-solid fa-gauge-high',
  Shotguns: 'fa-solid fa-explosion',
  Rifles: 'fa-solid fa-gun',
  'Sniper Rifles': 'fa-solid fa-bullseye',
  'Heavy Weapons': 'fa-solid fa-meteor',
};

function toSectionId(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

function pushCategorySection(
  category: string,
  byCategory: Map<string, ValorantWeaponShopDto[]>,
  out: WeaponCategorySectionViewModel[]
): void {
  const list = byCategory.get(category);
  if (!list || list.length === 0) {
    return;
  }
  out.push({
    sectionId: toSectionId(category),
    title: category,
    description: WEAPON_CATEGORY_DESCRIPTION[category] || 'Weapons available in this store category.',
    iconClass: WEAPON_CATEGORY_ICON[category] ?? 'fa-solid fa-gun',
    weapons: list,
  });
  byCategory.delete(category);
}

export function buildWeaponCategorySections(weapons: ValorantWeaponShopDto[]): WeaponCategorySectionViewModel[] {
  const byCategory = new Map<string, ValorantWeaponShopDto[]>();
  for (const w of weapons) {
    const cat = w.shopData.category;
    const bucket = byCategory.get(cat);
    if (bucket) {
      bucket.push(w);
      continue;
    }
    byCategory.set(cat, [w]);
  }
  for (const list of byCategory.values()) {
    list.sort((a, b) => a.displayName.localeCompare(b.displayName, 'en'));
  }
  const out: WeaponCategorySectionViewModel[] = [];
  for (const category of WEAPON_CATEGORY_ORDER) {
    pushCategorySection(category, byCategory, out);
  }
  const remaining = [...byCategory.keys()].sort((a, b) => a.localeCompare(b, 'en'));
  for (const category of remaining) {
    pushCategorySection(category, byCategory, out);
  }
  return out;
}
