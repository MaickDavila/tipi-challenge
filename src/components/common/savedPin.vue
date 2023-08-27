<script setup lang="ts">
import checkSvg from "../../assets/images/svg/check.svg";
import useHistoryStore, { IHistory } from "../histories/histories.store";

const props = defineProps({
  resource: {
    type: Object as PropType<IHistory>,
    required: true,
  },
});

const isMarked = computed(() =>
  useHistoryStore().getMarkedById(props.resource.seriesId)
);

const saveResource = () => {
  const result = useHistoryStore().addMarked(props.resource);

  if (!result) {
    alert("Solo puedes guardar 10 recursos como máximo!");
  }
};

const removeMarked = () => {
  useHistoryStore().removeMarked(props.resource.seriesId);
};
</script>

<template>
  <button
    @click="isMarked ? removeMarked() : saveResource()"
    class="pin-button"
    :class="{
      'pin-button--not-marked': !isMarked,
      'pin-button--marked': isMarked,
    }"
  >
    <span>
      {{ isMarked ? "Saved" : "Save 👍" }}
    </span>

    <img v-if="isMarked" :src="checkSvg" alt="pin" />
  </button>
</template>

<style scoped lang="scss">
.pin-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 3rem;
  border-radius: 8px;
  color: rgb(51, 156, 95);
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;

  &--not-marked {
    background-color: white;
    border: 1px solid rgb(20, 224, 54);
  }

  &--marked {
    background-color: rgb(28, 172, 52);
    border: 1px solid rgb(20, 224, 54);
    color: white;

    img {
      filter: invert(100%) sepia(100%) saturate(0%) brightness(100%)
        contrast(100%);
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 1rem;
    margin-left: 0.5rem;
  }
}
</style>
