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

const DIVISION_LABEL: Readonly<Record<string, string>> = {
  IRON: 'Iron',
  BRONZE: 'Bronze',
  SILVER: 'Silver',
  GOLD: 'Gold',
  PLATINUM: 'Platinum',
  DIAMOND: 'Diamond',
  ASCENDANT: 'Ascendant',
  IMMORTAL: 'Immortal',
  RADIANT: 'Radiant',
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
    const title = DIVISION_LABEL[key];
    if (!title) {
      continue;
    }
    sections.push({ key, title, tiers: grouped });
  }
  return sections;
}
