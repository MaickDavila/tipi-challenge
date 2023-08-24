// use Composition API to create a reactive store
import { reactive } from "vue";
import { ISerie } from "./models/seriesModel";

const state = reactive({
  series: Array<ISerie>(),
  currentOffset: 1,
});

const useSeriesStore = {
  get series(): Array<ISerie> {
    return state.series;
  },
  set series(series: Array<ISerie>) {
    state.series = series;
  },

  get currentOffset(): number {
    return state.currentOffset;
  },

  set currentOffset(currentOffset: number) {
    state.currentOffset = currentOffset;
  },
};

export default useSeriesStore;
