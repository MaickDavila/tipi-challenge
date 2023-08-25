// store using pinia
import { defineStore } from "pinia";

const APP_NAME = import.meta.env.VITE_APP_APP_NAME;
const HISTORY_STRING = `${APP_NAME}_histories`;

export interface IHistory {
  seriesId: number;
  seriesTitle: string;
  seriesImage: string;
  lastDate: string;
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
  },

  actions: {
    loadHistoriesFromLocalStorage() {
      const histories = localStorage.getItem(HISTORY_STRING);
      this.histories = histories && JSON.parse(histories);
    },

    addHistory(history: IHistory) {
      if (!this.histories) this.histories = Array<IHistory>();
      this.histories.unshift(history);
      this.saveHistoriesToLocalStorage();
    },

    addMarked(history: IHistory) {
      const index = this.histories.findIndex(
        (h) => h.seriesId === history.seriesId
      );

      if (index > -1) {
        this.histories.splice(index, 1);
      }

      this.markedList.unshift(history);
    },

    saveHistoriesToLocalStorage() {
      localStorage.setItem(HISTORY_STRING, JSON.stringify(this.histories));
    },
  },
});
