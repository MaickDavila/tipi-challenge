// use Composition API to create a reactive store, without installing other libraries
import { reactive } from "vue";
import { ISerie } from "./models/seriesModel";

const state = reactive({
  series: Array<ISerie>(),
  currentOffset: 0,
  isCompleteSeries: false,
  isLoading: false,
});

export default {
  get series(): Array<ISerie> {
    return state.series;
  },
  set series(series: Array<ISerie>) {
    state.series = series;
  },

  get currentOffset(): number {
    return state.currentOffset;
  },

  set currentOffset(offset: number) {
    state.currentOffset = offset;
  },

  incraseOffset() {
    state.currentOffset += 1;
  },

  get isCompleteSeries(): boolean {
    return state.isCompleteSeries;
  },

  set isCompleteSeries(isComplete: boolean) {
    state.isCompleteSeries = isComplete;
  },

  get isLoading(): boolean {
    return state.isLoading;
  },

  set isLoading(isLoading: boolean) {
    state.isLoading = isLoading;
  },
};
