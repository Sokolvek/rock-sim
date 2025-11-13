<template>
    <section class="section">
        <div class="buttons">
            <button @click="router.push('/shop')">Shop</button>
            <div>
                <!-- <p>деньги: {{ store.money }}</p> -->
                <p>Счастье: {{ store.happiness }}</p>
            </div>
        </div>
        <div class="rock" ref="rocks">

                <img src="/rock1.png" alt="" v-if="store.happiness < 110">
                <img src="/rock2.png" alt="" v-else-if="store.happiness < 300">
                <img src="/rock3.png" alt="" v-else>

        </div>
    </section>
</template>

<script setup>
import { useCounterStore } from '../store';
import info from "../info.json"
import { useRouter } from 'vue-router';
const store = useCounterStore()
const router = useRouter()
</script>

<style scoped>
.section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    height: 100svh;
}

.rock {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100svh;
}

.buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
</style>