<script setup lang="ts">
import { getSeries } from "./api/useGetSeries";
import useSeriesStore from "./series.store";
//

const series = computed(() => useSeriesStore.series || []);
const isLoadingSeries = computed(() => useSeriesStore.isLoading);

const infiniteScroll = () => {
  useSeriesStore.incraseOffset();
  getSeries();
};
</script>

<template>
  <marvel-page>
    <template #header>
      <h1 class="title"><b class="text-color-base">Marvel</b> Universe</h1>
    </template>

    <card-series v-for="(serie, i) in series" :key="i" :serie="serie" />
    <observer @intersect="infiniteScroll" />

    <loading v-if="isLoadingSeries" />
  </marvel-page>
</template>

<style scoped>
.title {
  color: white;
  font-size: 5rem;
}
</style>
