<script setup lang="ts">
import useGetSeries from "./api/useGetSeries";
import useSeriesStore from "./series.store";
//

const series = computed(() => useSeriesStore.series || []);
const isLoadingSeries = computed(() => useSeriesStore.isLoading);

const infiniteScroll = () => {
  useSeriesStore.incraseOffset();
  useGetSeries();
};
</script>

<template>
  <marvel-page>
    <template #title>
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
