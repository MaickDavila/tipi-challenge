<script setup lang="ts">
import { PropType } from "vue";
import { ISerie } from "../models/seriesModel.ts";

defineProps({
  serie: Object as PropType<ISerie>,
});
</script>

<template>
  <div class="flex-col">
    <div
      class="series-card"
      :style="{
        backgroundImage: `url(${serie?.thumbnail.path}.${serie?.thumbnail.extension})`,
      }"
    ></div>

    <div class="series-card-info">
      <span>{{ serie?.title }}</span>
      <p>
        {{ serie?.startYear }}
        {{ serie?.startYear != serie?.endYear ? ` - ${serie?.endYear}` : "" }}
      </p>
    </div>
  </div>
</template>

<style>
.series-card {
  height: 18em;
  width: 14em;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.series-card-info {
  width: 14em;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  color: white;

  > p {
    color: #7f92ac;
  }
}
</style>
