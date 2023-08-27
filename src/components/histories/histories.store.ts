// store using pinia
import { defineStore } from "pinia";

const APP_NAME = import.meta.env.VITE_APP_APP_NAME;
const HISTORY_STRING = `${APP_NAME}_histories`;

export interface IHistory {
  seriesId: number;
  seriesTitle: string;
  seriesImage: string;
  lastDate: string;
  resourceURI: string;
}

export default defineStore({
  id: "histories",
  state: () => ({
    histories: Array<IHistory>(),
    markedList: Array<IHistory>(),
  }),

  getters: {
    getHistories(): Array<IHistory> {
      return this.histories;
    },

    getMarkedList(): Array<IHistory> {
      return this.markedList;
    },

    getMarkedById:
      (state) =>
      (id: number): IHistory | undefined => {
        if (!state.markedList) return undefined;
        return state.markedList.find((h) => h.seriesId === id);
      },
  },

  actions: {
    loadHistoriesFromLocalStorage(): void {
      const histories = localStorage.getItem(HISTORY_STRING);
      this.histories = histories && JSON.parse(histories);
    },

    loadMarkedListFromLocalStorage(): void {
      const markedList = localStorage.getItem(`${APP_NAME}_markedList`);
      this.markedList = markedList && JSON.parse(markedList);
    },

    addHistory(history: IHistory): void {
      if (!this.histories) this.histories = Array<IHistory>();

      if (this.markedList) {
        const index = this.markedList.findIndex(
          (h) => h.seriesId === history.seriesId
        );

        if (index > -1) {
          return;
        }
      }

      this.histories.unshift(history);
      this.saveHistoriesToLocalStorage();
    },

    addMarked(history: IHistory): boolean {
      if (!this.markedList) this.markedList = Array<IHistory>();

      if (this.markedList.length > 9) {
        return false;
      }

      const list = this.histories.filter(
        (h) => h.seriesId === history.seriesId
      );

      if (list.length > -1) {
        this.histories = this.histories.filter(
          (h) => h.seriesId !== history.seriesId
        );
        this.saveHistoriesToLocalStorage();
      }

      this.markedList.unshift(history);
      this.saveMarkedListToLocalStorage();
      return true;
    },

    removeMarked(id: number): void {
      if (!this.markedList) this.markedList = Array<IHistory>();

      const index = this.markedList.findIndex((h) => h.seriesId === id);

      if (index > -1) {
        this.histories.unshift(this.markedList[index]);
        this.saveHistoriesToLocalStorage();
        this.markedList.splice(index, 1);
      }

      this.saveMarkedListToLocalStorage();
    },

    saveMarkedListToLocalStorage(): void {
      localStorage.setItem(
        `${APP_NAME}_markedList`,
        JSON.stringify(this.markedList)
      );
    },

    saveHistoriesToLocalStorage(): void {
      localStorage.setItem(HISTORY_STRING, JSON.stringify(this.histories));
    },
  },
});
