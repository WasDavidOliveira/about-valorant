export interface ValorantSeasonDto {
  uuid: string;
  displayName: string;
  type: string | null;
  startTime: string;
  endTime: string;
  parentUuid: string | null;
}

export interface SeasonsApiResponseDto {
  data: ValorantSeasonDto[];
}

export interface TemporadaCardViewModel {
  title: string;
  startTime: string;
  endTime: string;
}

export interface TemporadaSectionViewModel {
  sectionId: string;
  heading: string;
  cards: TemporadaCardViewModel[];
}

const ACT_TYPE = 'EAresSeasonType::Act';

function toCardViewModel(s: ValorantSeasonDto): TemporadaCardViewModel {
  return {
    title: s.displayName,
    startTime: s.startTime,
    endTime: s.endTime,
  };
}

export function buildTemporadaSections(seasons: ValorantSeasonDto[]): TemporadaSectionViewModel[] {
  const episodes = seasons
    .filter((s) => s.parentUuid === null && s.type !== ACT_TYPE)
    .sort((a, b) => Date.parse(b.startTime) - Date.parse(a.startTime));

  const sections: TemporadaSectionViewModel[] = [];
  const episodeIds = new Set(episodes.map((e) => e.uuid));

  for (const ep of episodes) {
    const acts = seasons
      .filter((s) => s.type === ACT_TYPE && s.parentUuid === ep.uuid)
      .sort((a, b) => Date.parse(a.startTime) - Date.parse(b.startTime));
    const cards: TemporadaCardViewModel[] = [];
    if (acts.length === 0) {
      cards.push(toCardViewModel(ep));
    }
    if (acts.length > 0) {
      for (const act of acts) {
        cards.push(toCardViewModel(act));
      }
    }
    sections.push({
      sectionId: ep.uuid,
      heading: ep.displayName,
      cards,
    });
  }

  const orphanActs = seasons.filter(
    (s) => s.type === ACT_TYPE && s.parentUuid !== null && !episodeIds.has(s.parentUuid)
  );
  if (orphanActs.length === 0) {
    return sections;
  }
  orphanActs.sort((a, b) => Date.parse(a.startTime) - Date.parse(b.startTime));
  sections.push({
    sectionId: 'orphan-acts',
    heading: 'Outros atos',
    cards: orphanActs.map(toCardViewModel),
  });
  return sections;
}
