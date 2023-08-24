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

    <div class="series-card-info-container">
      <div class="series-card-info">
        <span>{{ serie?.title }}</span>

        <p>
          {{ serie?.startYear }}
          {{ serie?.startYear != serie?.endYear ? ` - ${serie?.endYear}` : "" }}
        </p>
      </div>

      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: end;
          gap: 0.5em;
        "
      >
        <div v-if="serie?.type">
          <span class="series-card-chip">{{ serie?.type }}</span>
        </div>

        <div
          style="
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 0.5em;
            color: white;
            width: fit-content;
            padding: 0 1em;
            border-radius: 20px;
            font-size: small;
          "
        >
          <p v-if="serie?.comics">
            {{ serie?.comics?.available }}
            {{ serie?.comics?.available > 1 ? "comics" : "comic" }}
          </p>
          |
          <p v-if="serie?.stories">
            {{ serie?.stories?.available }}
            {{ serie?.stories?.available > 1 ? "stories" : "story" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.series-card {
  height: 24em;
  width: 100%;
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

.series-card-info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
}

.series-card-info {
  width: 14em;
  display: flex;
  flex-direction: column;
  color: white;

  > p {
    color: #7f92ac;
  }
}

@media (max-width: 768px) {
  .series-card {
    height: 16em;
  }

  .series-card-info {
    width: 10em;
  }
}

.series-card-chip {
  background-color: #082041;
  padding: 0.5em;
  border-radius: 20px;
  font-size: small;
  color: white;
  padding: 0.5em 1em;
}
</style>
