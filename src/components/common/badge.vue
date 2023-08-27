<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="badge">{{ value }}</span>
</template>

<style scoped>
.badge {
  background-color: #082041;
  border-radius: 20px;
  font-size: small;
  color: white;
  padding: 0.5em 1em;
}
</style>
