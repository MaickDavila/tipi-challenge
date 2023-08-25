<script setup lang="ts">
import useHistoryStore from "./components/histories/histories.store";

const historyStore = useHistoryStore();

historyStore.loadHistoriesFromLocalStorage();
</script>

<template>
  <router-view></router-view>
</template>
