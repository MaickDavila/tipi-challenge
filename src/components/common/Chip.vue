<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="series-card-chip">{{ value }}</span>
</template>

<style scoped>
.series-card-chip {
  background-color: #082041;
  border-radius: 20px;
  font-size: small;
  color: white;
  padding: 0.5em 1em;
}
</style>
