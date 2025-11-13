<template>
    <section class="section">
        <div class="info">
            <button @click="router.back()">Назад</button>
            <p>Счастье: {{ store.happiness }}</p>
        </div>
        <div class="list">
            <div v-for="(btn,i) in info" :key="btn.title" class="card">
                <div class="img">
                    <img :src="`/${btn.img}`" alt="">
                </div>
                 <h4>{{ btn.title }}</h4>
                 <p>{{ btn.price }}$</p>
                <button @click="handleBuy(i)">Купить</button>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import info from "../info.json"
import { useCounterStore } from "../store";

const store = useCounterStore()

function handleBuy(i){
    if(store.happiness < info[i].price) return
    store.boughtItems.push(info[i])
    store.happiness -= info[i].price
}

const router = useRouter()

</script>

<style scoped>

.info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.section {
    padding: 20px;
}
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card{
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.img {
    max-width: 100%;
}

.img > img {
    width: 100%;
    height: 100px;
}
</style>