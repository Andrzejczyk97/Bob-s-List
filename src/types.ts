declare global {
  interface Window {
    NotesStorage: Storage;
  }
}

export type StorageData = ListRecord[];

export type StorageSubscriber = (data: StorageData) => void;

export interface Storage {
  subscribe: (subscriber: StorageSubscriber) => () => void;
  __modifyStorage: (data: StorageData) => void;
  __getData: () => StorageData;
}

export interface ListRecord {
  id: string;
  name: string;
  date: string;
  favouriteDish: {
    name: string;
    note?: string;
  };
  grades: number[];
  avgGrade?: string;
  children?: JSX.Element[];
}
