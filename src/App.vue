<script setup>
import { onMounted } from 'vue';
import { useCounterStore } from './store';

onMounted(() => {
  const store = useCounterStore()
  setInterval(()=> {
    let toGive = 1
    store.boughtItems.forEach((item) => {
      toGive+=item.gives
    })
    store.happiness+=toGive
  }, 1000)
})
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
