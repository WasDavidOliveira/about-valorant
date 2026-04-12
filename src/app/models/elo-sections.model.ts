export interface CompetitiveTierDto {
  tier: number;
  tierName: string;
  divisionName: string;
  largeIcon: string | null;
}

export interface CompetitiveTierTableDto {
  uuid: string;
  tiers: CompetitiveTierDto[];
}

export interface CompetitiveTiersApiDto {
  data: CompetitiveTierTableDto[];
}

export interface EloSectionViewModel {
  key: string;
  title: string;
  tiers: CompetitiveTierDto[];
}

const DIVISION_ORDER: readonly string[] = [
  'IRON',
  'BRONZE',
  'SILVER',
  'GOLD',
  'PLATINUM',
  'DIAMOND',
  'ASCENDANT',
  'IMMORTAL',
  'RADIANT',
];

const DIVISION_LABEL_PT: Readonly<Record<string, string>> = {
  IRON: 'Ferro',
  BRONZE: 'Bronze',
  SILVER: 'Prata',
  GOLD: 'Ouro',
  PLATINUM: 'Platina',
  DIAMOND: 'Diamante',
  ASCENDANT: 'Ascendente',
  IMMORTAL: 'Imortal',
  RADIANT: 'Radiante',
};

export function buildEloSections(tiers: CompetitiveTierDto[]): EloSectionViewModel[] {
  const sections: EloSectionViewModel[] = [];
  for (const key of DIVISION_ORDER) {
    const grouped = tiers
      .filter((t) => t.divisionName === key && t.largeIcon)
      .sort((a, b) => a.tier - b.tier);
    if (grouped.length === 0) {
      continue;
    }
    const title = DIVISION_LABEL_PT[key];
    if (!title) {
      continue;
    }
    sections.push({ key, title, tiers: grouped });
  }
  return sections;
}
