export interface IComicItem {
  name: string;
  resourceURI: string;
}

export interface IComic {
  available: number;
  collectionURI: string;
  items: IComicItem[];
}

export interface IStories {
  available: number;
  collectionURI: string;
  items: any[];
}

export interface ISerie {
  id: number;
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  rating: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  type: string;
  comics: IComic;
  stories: IStories;
}
