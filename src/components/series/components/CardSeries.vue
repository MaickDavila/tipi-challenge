<script setup lang="ts">
import { PropType } from "vue";
import { ISerie } from "../models/seriesModel.ts";

defineProps({
  serie: Object as PropType<ISerie>,
});
</script>

<template>
  <div>{{ serie }}</div>
</template>
