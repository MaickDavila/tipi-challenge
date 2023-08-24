<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["intersect"]);
const root = ref(null);
const observer = ref();

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emit("intersect");
    }
  });
  observer.value.observe(root.value);
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div ref="root" />
</template>
