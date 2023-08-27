<script setup lang="ts">
import { IComicItem, ISerie } from "../series/models/seriesModel";
import useSerieStore from "../series/series.store";
import { getResource } from "../details/api/useGetComics";
import routerConfig from "../../router/routerConfig";

const router = useRouter();
const resource = ref<ISerie>();
const notFound = ref(false);
const resourcesResponse = ref<IComicItem[]>([]);
const resourceList = ref<ISerie[]>([]);
const serie = ref<IComicItem | null>();

const isLoading = computed(() => useSerieStore.isLoading);

const setResource = async () => {
  const type = router.currentRoute.value.params.type;
  const resourceURI = router.currentRoute.value.params.id.toString();
  const resourceId = resourceURI.split("/").pop();

  if (!resourceId) window.location.href = "/";

  const result = await getResource(`/${type}/${resourceId}`);
  notFound.value = result === null;

  if (!result) return;

  resource.value = result;

  if (type === "series") resourcesResponse.value = result.comics.items;
  else {
    if (result.series) serie.value = result.series || null;
  }

  await setAllResources();

  router.push({
    name: routerConfig.detail.name,
    params: {
      type: serie.value ? "comics" : "series",
      id: resourceId,
    },
  });
};

const setAllResources = async () => {
  if (!resourcesResponse.value) return;
  try {
    await Promise.all(
      resourcesResponse.value.map(async (resource) => {
        const comic = await getResource(resource.resourceURI);
        if (comic) resourceList.value.push(comic);
      })
    );
  } catch (error) {
    console.log(error);
  }
};

const goToResource = async (
  value: ISerie,
  type: string,
  newWindow: boolean = true
) => {
  if (!newWindow) {
    console.log("value", value);
    router.replace({
      name: "detail",
      params: {
        type: type,
        id: value.resourceURI,
      },
    });

    router.currentRoute.value.params.type = type;
    router.currentRoute.value.params.id = value.resourceURI;
    serie.value = null;

    await setResource();
    return;
  }

  const routeData = router.resolve({
    name: "detail",
    params: {
      type: type,
      id: value.resourceURI,
    },
  });
  window.open(routeData.href, "_blank");
};

const goToTop = () => {
  nextTick(() => {
    window.scrollTo(0, 0);
  });
};

onMounted(() => {
  setResource();
  goToTop();
});

const goToOwnerBreadcrumb = () => {
  if (!serie.value) return;
  goToResource(
    { resourceURI: serie.value.resourceURI } as ISerie,
    "series",
    false
  );
};
</script>

<template>
  <template v-if="!notFound">
    <marvel-page>
      <div
        :style="{
          display: 'flex',
          flexDirection: 'row',
          gap: '0.5em',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }"
      >
        <router-link
          :to="{
            name: 'home',
          }"
        >
          <span class="breadcrumb">Home</span>
        </router-link>

        <span v-if="serie" class="breadcrumb">/</span>

        <span
          v-if="serie"
          :style="{
            cursor: 'pointer',
          }"
          @click="goToOwnerBreadcrumb"
        >
          <span class="breadcrumb">{{ serie.name }}</span>
        </span>

        <span class="breadcrumb">/</span>

        <span class="breadcrumb">{{ resource?.title }}</span>
      </div>

      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          justifyItems: 'center',
          alignItems: 'center',
          width: '100%',
        }"
      >
        <section class="detail-box" v-if="resource">
          <card-image
            :imageUrl="`${resource.thumbnail.path}.${resource.thumbnail.extension}`"
            width="400px"
            height="500px"
            static
          />

          <div class="detail-box__description">
            <div>
              <b class="detail-box__description__title">{{ resource.title }}</b>
              <span class="detail-box__description__published">
                Published <b>{{ resource.startYear }}</b>
              </span>
            </div>

            <div class="type" v-if="resource.type">
              Type:
              <chip :value="resource.type" />
            </div>

            <div
              class="detail-box__description__creators-container"
              v-if="resource.creators.items.length > 0"
            >
              <span class="detail-box__description__title-section">
                <b>Creators</b>
              </span>

              <div
                :style="{
                  display: resource.creators.items.length <= 5 ? 'flex' : '',
                  flexDirection: 'column',
                  gap: '0.5em',
                }"
              >
                <span
                  :style="{
                    textTransform: 'capitalize',
                    wordBreak: 'normal',
                  }"
                  v-for="(creator, i) in resource.creators.items"
                  :key="i"
                >
                  {{ resource.creators.items.length > 5 && i > 0 ? " | " : "" }}
                  {{ creator.role }}:
                  <b>{{ creator.name }}</b>
                </span>
              </div>
            </div>

            <div v-if="resource.description">
              <span class="title-section"><b>Description</b></span>

              <p>
                {{ resource.description }}
              </p>
            </div>
          </div>
        </section>

        <section
          v-if="resourceList.length > 0"
          :style="{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '6em 0',
          }"
        >
          <div
            :style="{
              width: '100%',
              textAlign: 'center',
            }"
          >
            <span
              :style="{
                textTransform: 'capitalize',
                wordBreak: 'normal',
                fontSize: '5rem',
              }"
              ><b>Comics</b></span
            >
          </div>

          <div
            :style="{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '1em',
              justifyContent: 'center',
            }"
          >
            <card-series
              v-for="(comic, i) in resourceList"
              :key="i"
              :serie="comic"
              @click="goToResource(comic, 'comics')"
            />
          </div>
        </section>

        <loading v-if="isLoading" />
      </div>
    </marvel-page>
  </template>

  <div v-else>NOT FOUND 404</div>
</template>

<style>
.breadcrumb {
  color: white;
  font-size: 1.5rem;
  text-transform: capitalize;
}
</style>
