<script setup lang="ts">
import useHistoryStore from "./components/histories/histories.store";

const historyStore = useHistoryStore();

historyStore.loadHistoriesFromLocalStorage();
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

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
