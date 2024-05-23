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
    characters: Character[];
    ais: Array<{ name: string; description: string }>;
    initialWorldInfoVisible?: boolean;
}