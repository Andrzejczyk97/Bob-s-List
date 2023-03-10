// ! YOU SHOULD NOT CHANGE THIS FILE

import { pull, random } from "lodash";
import { Storage, StorageData, StorageSubscriber } from "./types";
import {
  createCityGenerator,
  generateRandomGrades,
  getRandomFood
} from "./utils";

export function createDumbStorage(initialData: StorageData = []): Storage {
  const subscribers: StorageSubscriber[] = [];
  let data: StorageData = initialData;

  return {
    // /**
    //  * BEWARE that data may be incorrect
    //  * @param subscriber
    //  */
    subscribe: (subscriber) => {
      subscriber(data);
      subscribers.push(subscriber);

      return () => {
        pull(subscribers, subscriber);
      };
    },
    __getData: () => data,
    __modifyStorage: (changedData: StorageData) => {
      data = [...changedData];
      subscribers.forEach((subscriber) => subscriber(data));
    }
  };
}

const data: any = [
  {
    id: "thisIsKyiv",
    name: "Kyiv",
    date: "15.08.2002",
    favouriteDish: { name: "Borshch" },
    grades: [9.8, 9.1, 6.5]
  },
  {
    id: "riga",
    name: "Riga",
    date: "01.02.2012",
    favouriteDish: { name: "Auksta supa" },
    grades: [8.8, 9.0, 7.1, 5.5]
  }
];

function startStorageUpdater(storage: Storage) {
  const generateCity = createCityGenerator();

  let isEnoughtElements = false;
  let errorsCount = 0;

  const id = window.setInterval(() => {
    let storageData = storage.__getData();
    const shouldModifyExisting = random(0, 1, true) > 0.7;

    if (shouldModifyExisting || isEnoughtElements) {
      const randomCity = storageData[random(0, storageData.length - 1)];
      const randomCityIndex = storageData.indexOf(randomCity);

      storageData[randomCityIndex] = {
        ...randomCity,
        favouriteDish: {
          ...randomCity.favouriteDish,
          name: getRandomFood()
        },
        grades: generateRandomGrades()
      };
    } else {
      storageData = [...storage.__getData(), generateCity()];
    }

    if (random(0, 1, true) > 0.8 && errorsCount < 4) {
      errorsCount += 1;
      const randomCity = storageData[random(0, storageData.length - 1)];
      const randomCityIndex = storageData.indexOf(randomCity);

      storageData[randomCityIndex] = {
        ...randomCity,
        favouriteDish: null,
        grades: {}
      } as any;
    }

    storage.__modifyStorage(storageData);

    if (storage.__getData().length > 20) {
      isEnoughtElements = true;
    }
  }, 3000);

  return () => window.clearInterval(id);
}

export function createAppStoreWithUpdates() {
  const notesStorage = createDumbStorage(data);
  const stopUpdates = startStorageUpdater(notesStorage);

  window.addEventListener("beforeunload", stopUpdates);
  window.NotesStorage = notesStorage;
}
