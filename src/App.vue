<script setup lang="ts">
import useHistoryStore from "./components/histories/histories.store";

const historyStore = useHistoryStore();

historyStore.loadHistoriesFromLocalStorage();
historyStore.loadMarkedListFromLocalStorage();
</script>

<template>
  <header-component />

  <main
    :style="{
      marginTop: '80px',
    }"
  >
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>
