<script setup lang="ts">
import { getSerie } from "../series/api/useGetSeries";
import { ISerie } from "../series/models/seriesModel";
import useSerieStore from "../series/series.store";

const router = useRouter();
const serie = ref<ISerie>();
const notFound = ref(false);

const isLoading = computed(() => useSerieStore.isLoading);

const setSerie = async () => {
  const serieId = router.currentRoute.value.params.id;
  if (!serieId) window.location.href = "/";
  const result = await getSerie(Number(serieId));
  notFound.value = result === null;
  if (result) {
    serie.value = result;
  }
};

onMounted(() => {
  setSerie();
});
</script>

<template>
  <template v-if="!notFound">
    <marvel-page>
      <div class="detail-box" v-if="serie">
        <card-image
          :imageUrl="`${serie.thumbnail.path}.${serie.thumbnail.extension}`"
          width="400px"
          height="500px"
        />

        <div class="description">
          <div>
            <b
              :style="{
                fontSize: '2rem',
                display: 'block',
                wordBreak: 'normal',
              }"
              >{{ serie.title }}</b
            >
            <span
              :style="{
                fontSize: '1rem',
                color: 'gray',
              }"
              >Published <b>{{ serie.startYear }}</b></span
            >
          </div>

          <div
            :style="{
              display: 'flex',
              flexDirection: 'row',
              gap: '0.5em',
              alignItems: 'center',
            }"
            v-if="serie.type"
          >
            Type:
            <chip :value="serie.type" />
          </div>

          <div
            :style="{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5em',
            }"
            v-if="serie.creators.items.length > 0"
          >
            <span
              :style="{
                color: '#f59e0b',
              }"
              ><b>Creators</b></span
            >

            <div
              :style="{
                display: serie.creators.items.length <= 5 ? 'flex' : '',
                flexDirection: 'column',
                gap: '0.5em',
              }"
            >
              <span
                :style="{
                  textTransform: 'capitalize',
                  wordBreak: 'normal',
                }"
                v-for="(creator, i) in serie.creators.items"
                :key="i"
              >
                {{ serie.creators.items.length > 5 && i > 0 ? " | " : "" }}
                {{ creator.role }}:
                <b>{{ creator.name }}</b>
              </span>
            </div>
          </div>

          <div v-if="serie.description">
            <span
              :style="{
                color: '#f59e0b',
              }"
              ><b>Description</b></span
            >

            <p>
              {{ serie.description }}
            </p>
          </div>
        </div>
      </div>

      <div
        style="width: 100%; height: 1px; background-color: #ccc; margin: 20px 0"
      ></div>

      <loading v-if="isLoading" />
    </marvel-page>
  </template>

  <div v-else>NOT FOUND 404</div>
</template>

<style>
.detail-box {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

.description {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 10;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
