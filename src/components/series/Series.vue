<script setup lang="ts">
import { computed, onMounted } from "vue";
import useGetSeries from "./api/useGetSeries";
import cardSeries from "./components/CardSeries.vue";
import useSeriesStore from "./series.store";
//

const series = computed(() => {
  return useSeriesStore.series;
});

onMounted(() => {
  useGetSeries();
});
</script>
<template>
  <div class="main-container">
    <div class="series-box">
      <div>
        <h1>Series</h1>
      </div>

      <div>
        <card-series v-for="(serie, i) in series" :key="i" :serie="serie" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.series-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
./api/getSeries
