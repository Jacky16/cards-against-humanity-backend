export interface Card {
  id: string;
  text: string;
}

export interface BlackCard extends Card {
  pick: number;
}

export interface WhiteCard extends Card {
  text: string;
}

export interface CardSet {
  id: string;
  name: string;
  codeName: string;
  official: boolean;
  blackCards: BlackCard[];
  whiteCards: WhiteCard[];
}
