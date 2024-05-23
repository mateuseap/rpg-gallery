export interface ICharacter {
  name: string;
  description: string;
  imageUrl: string;
  background?: string;
  race?: string;
  char_class?: string;
  realm?: string;
  appearance?: string;
  personality?: string;
  strengths?: string;
  weaknesses?: string;
}

export interface IWorld {
  title: string;
  history: string;
  characters: ICharacter[];
  ais: Array<{ name: string; description: string }>;
  initialWorldInfoVisible?: boolean;
}

export type Sizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | "10xl";
