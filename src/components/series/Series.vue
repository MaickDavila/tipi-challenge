<script setup lang="ts">
import routerConfig from "../../router/routerConfig";
import { getSeries } from "./api/useGetSeries";
import { ISerie } from "./models/seriesModel";
import useSeriesStore from "./series.store";
//

const series = computed(() => useSeriesStore.series || []);
const isLoadingSeries = computed(() => useSeriesStore.isLoading);

const infiniteScroll = () => {
  useSeriesStore.incraseOffset();
  getSeries();
};

const router = useRouter();

const goToDetails = (serie: ISerie) => {
  router.push({
    name: routerConfig.detail.name,
    params: {
      type: "series",
      id: serie.resourceURI,
    },
  });
};
</script>

<template>
  <marvel-page>
    <card-series
      v-for="(serie, i) in series"
      :key="i"
      :serie="serie"
      @click="goToDetails"
    />
    <observer @intersect="infiniteScroll" />

    <loading v-if="isLoadingSeries" />
  </marvel-page>
</template>
