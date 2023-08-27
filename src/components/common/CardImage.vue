<script setup lang="ts">
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "24rem",
  },
  static: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="{
      'series-card': !static,
      'series-card-static': static,
    }"
    :style="{
      backgroundImage: `url(${imageUrl})`,
      width: width,
      height: height,
    }"
  ></div>
</template>

<style scoped lang="scss">
.series-card {
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

  &-static {
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
  }

  @media (max-width: 768px) {
    height: 16em;
  }
}
</style>
