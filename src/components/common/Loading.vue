<script setup lang="ts">
defineProps({
  fixed: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="loading-container">
    <div class="loading">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes custom_ripple {
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
}
.loading div {
  position: absolute;
  border-width: 4px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  animation: custom_ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loading div:nth-child(1) {
  border-color: #ea3f34;
  animation-delay: 0s;
}
.loading div:nth-child(2) {
  border-color: #f2982c;
  animation-delay: -0.5s;
}
.loading-container {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
}
.loading {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.loading div {
  box-sizing: content-box;
}
</style>
