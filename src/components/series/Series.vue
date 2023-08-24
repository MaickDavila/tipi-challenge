<script setup lang="ts">
import { computed, ref } from "vue";
import useGetSeries from "./api/useGetSeries";
import cardSeries from "./components/CardSeries.vue";
import useSeriesStore from "./series.store";
import observer from "../common/Observer.vue";
import loading from "../common/Loading.vue";
//
const seriesListRef = ref();
const series = computed(() => {
  return useSeriesStore.series;
});

const isLoadingSeries = computed(() => useSeriesStore.isLoading);

const infiniteScroll = () => {
  useSeriesStore.incraseOffset();
  useGetSeries();
};
</script>

<template>
  <div class="main-container">
    <div class="series-box">
      <div class="series-title">
        <h1>Series de <b class="text-color-base">Marvel</b></h1>
      </div>

      <div class="cards-container" ref="seriesListRef">
        <card-series v-for="(serie, i) in series" :key="i" :serie="serie" />
        <observer @intersect="infiniteScroll" />

        <div v-if="isLoadingSeries">
          <loading />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.series-title {
  text-align: center;

  h1 {
    color: white;
    font-size: 5rem;
  }
}

.series-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cards-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: calc(100vh - 300px);
  overflow-y: scroll;
  padding: 20px;
}
</style>
