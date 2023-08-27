<script setup lang="ts">
import { PropType } from "vue";
import { ISerie } from "../models/seriesModel.ts";
import useHistoryStore, { IHistory } from "../../histories/histories.store";
import { getCurrentFormattedTime } from "../../../utils/useDate";
//

const props = defineProps({
  serie: {
    type: Object as PropType<ISerie>,
    required: true,
  },
});

const emits = defineEmits(["click"]);

const historyStore = useHistoryStore();

const clickOnImageEvent = () => {
  const history: IHistory = {
    seriesId: props.serie.id,
    seriesTitle: props.serie.title,
    seriesImage: `${props.serie.thumbnail.path}.${props.serie.thumbnail.extension}`,
    lastDate: getCurrentFormattedTime(),
    resourceURI: props.serie.resourceURI,
  };

  historyStore.addHistory(history);
  emits("click", props.serie);
};
</script>

<template>
  <div v-if="serie" class="flex-col">
    <card-image
      v-if="serie.thumbnail"
      @click="clickOnImageEvent"
      :imageUrl="`${serie.thumbnail.path}.${serie.thumbnail.extension}`"
    />

    <div class="series-card-info-container">
      <div class="series-card-info">
        <span>{{ serie.title }}</span>

        <p>
          {{ serie.startYear }}
          {{ serie.startYear != serie.endYear ? ` - ${serie.endYear}` : "" }}
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
        <chip :value="serie.type" v-if="serie.type" />

        <div class="series-card-info-resources">
          <p v-if="serie.comics">
            {{ serie.comics.available }}
            {{ serie.comics.available > 1 ? "comics" : "comic" }}
          </p>
          |
          <p v-if="serie.stories">
            {{ serie.stories.available }}
            {{ serie.stories.available > 1 ? "stories" : "story" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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

  p {
    color: #7f92ac;
  }
}

@media (max-width: 768px) {
  .series-card-info {
    width: 10em;
  }
}

.series-card-info-resources {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5em;
  color: white;
  width: fit-content;
  padding: 0 1em;
  border-radius: 20px;
  font-size: small;
}
</style>
