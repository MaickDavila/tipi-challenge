<script setup lang="ts">
import { IHistory } from "../histories.store";

defineProps({
  history: {
    type: Object as PropType<IHistory>,
    required: true,
  },
});
</script>

<template>
  <div style="display: flex; flex-direction: row; align-items: center">
    <div
      :style="{
        backgroundImage: `url(${history.seriesImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginRight: '20px',
      }"
    ></div>

    <div>
      <a style="color: white; font-size: x-large">
        <b>{{ history.seriesTitle }}</b>
      </a>

      <p style="font-size: small; color: gray">
        Visitado el: {{ history.lastDate }}
      </p>
    </div>
  </div>
</template>
