export interface IComicItem {
  name: string;
  resourceURI: string;
}

export interface TComic {
  available: number;
  collectionURI: string;
  items: IComicItem[];
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
  comics: TComic;
}
