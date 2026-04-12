export interface ValorantWeaponSkinDto {
  displayName: string;
  displayIcon: string | null;
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
