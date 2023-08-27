<script setup lang="ts">
import routerConfig from "../../../router/routerConfig";
import { IHistory } from "../histories.store";

const props = defineProps({
  history: {
    type: Object as PropType<IHistory>,
    required: true,
  },
});

const router = useRouter();

const goToDetails = () => {
  const resourceURI = props.history.resourceURI;
  const type = resourceURI.split("/").slice(-2)[0];

  router.push({
    name: routerConfig.detail.name,
    params: {
      type: type,
      id: props.history.resourceURI,
    },
  });
};
</script>

<template>
  <div
    @click="goToDetails"
    style="
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    "
  >
    <div
      :style="{
        backgroundImage: `url(${history.seriesImage})`,
      }"
      class="card-history"
    ></div>

    <div>
      <a style="color: white; font-size: x-large">
        <b>{{ history.seriesTitle }}</b>
      </a>

      <p style="font-size: small; color: gray">
        Visitado el: {{ history.lastDate }}
      </p>
    </div>
  </div>
</template>

<style>
.card-history {
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}
</style>
