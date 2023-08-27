<script setup lang="ts">
import { ISerie } from "../series/models/seriesModel";
import useHistoryStore from "./histories.store";
//
const historyStore = useHistoryStore();
const getHistories = computed(() => historyStore.getHistories);
const getMarkedList = computed(() => historyStore.getMarkedList);

onMounted(() => {
  historyStore.loadHistoriesFromLocalStorage();
  historyStore.loadMarkedListFromLocalStorage();
});
</script>
<template>
  <marvel-page>
    <div
      :style="{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '100%',
      }"
    >
      <section
        :style="{
          borderRight: '1px solid #fff',
          paddingRight: '20px',
          overflowY: 'auto',
        }"
      >
        <h2>Historial de Recursos Guardados</h2>

        <div style="display: flex; flex-direction: column; gap: 20px">
          <div
            :style="{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              paddingBottom: '100px',
            }"
            v-for="(history, i) in getMarkedList"
            :key="i"
          >
            <card-histories :history="history" />
            <saved-pin :resource="history" />
          </div>
        </div>
      </section>

      <section
        :style="{
          overflowY: 'auto',
        }"
      >
        <h2>Historial de Recursos Visitados</h2>

        <div style="display: flex; flex-direction: column; gap: 20px">
          <div
            :style="{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              paddingBottom: '100px',
            }"
            v-for="(history, i) in getHistories"
            :key="i"
          >
            <card-histories :history="history" />
            <saved-pin :resource="history" />
          </div>
        </div>
      </section>
    </div>
  </marvel-page>
</template>
