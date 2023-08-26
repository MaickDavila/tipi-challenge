export interface IItem {
  available: number;
  collectionURI: string;
}

export interface IComicItem {
  name: string;
  resourceURI: string;
}

export interface IComic extends IItem {
  items: IComicItem[];
}

export interface IStoryItem extends IComicItem {
  type: string;
}

export interface IStories extends IItem {
  items: IStoryItem[];
}

export interface ICreatorItem extends IComicItem {
  role: string;
}

export interface ICreator extends IItem {
  items: ICreatorItem[];
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
  creators: ICreator;
}
