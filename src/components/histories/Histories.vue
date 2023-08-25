<script setup lang="ts">
import useHistoryStore from "./histories.store";
//
const historyStore = useHistoryStore();
const getHistories = computed(() => historyStore.getHistories);
const getMarkedList = computed(() => historyStore.getMarkedList);

onMounted(() => {
  historyStore.loadHistoriesFromLocalStorage();
});
</script>
<template>
  <marvel-page>
    <div style="display: flex; flex-direction: column">
      <div>
        <pre>{{ getMarkedList }}</pre>
      </div>

      <section>
        <h2>Historial de Series Vistas</h2>

        <div style="display: flex; flex-direction: column; gap: 20px">
          <card-histories
            v-for="(history, i) in getHistories"
            :key="i"
            :history="history"
          />
        </div>
      </section>
    </div>
  </marvel-page>
</template>
