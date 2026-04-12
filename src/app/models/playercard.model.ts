export interface PlayerCardDto {
  uuid: string;
  displayName: string;
  largeArt: string | null;
}

export interface PlayerCardsApiDto {
  data: PlayerCardDto[];
}
