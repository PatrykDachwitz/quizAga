<script setup>
import { ref, inject, provide } from 'vue'
import {getMuscle} from "@/js/muscle";
import {getRandomArbitrary} from "@/js/getRandomArbitrary";

defineProps([
    'muscle',
    'musculeQuery'
])
const musculeAll = ref(getMuscle(3));
const correctValue = ref(null);

const querys = inject('querysValue');

const testValue = inject('testQuery');
function testValueFunction(currentName, value, index) {

  if(currentName == value) {
    let btnSuccess = document.querySelector('button[data-btn-id="' + index + '"]');
    btnSuccess.classList.remove('btn-primary');
    btnSuccess.classList.add('btn-success');
    testValue.value = currentName + getRandomArbitrary(1, 10000);

  } else {
    let btnErr = document.querySelector('button[data-btn-id="' + index + '"]');
    btnErr.classList.remove('btn-primary');
    btnErr.classList.add('btn-warning');
    setTimeout(() =>{
      btnErr.classList.add('btn-primary');
      btnErr.classList.remove('btn-warning');
    }, 500)

  }


}


</script>

<template>
<div class="gameContainer" :data-id-query="muscle.id">
  <div class="imageContainer">
    <img :src="'/' + muscle.imgSrc + '.JPG'" height="350"/>
  </div>
  <div class="queryContainer row">
    <input :value="muscle.name" type="hidden" :data-id-query-actual="muscle.id">
    <div v-for="(query, index) in querys" :key="index" class="col-6 mb-4 d-flex justify-content-center align-items-center">
      <button class="btn btn-primary w-100 h-100 " :data-btn-id="muscle.id + 'test' + index" @click="testValueFunction(muscle.name, query, muscle.id + 'test' + index)">{{ query }}</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.gameContainer {
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.imageContainer {
  min-height: 50vh;
  max-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.queryContainer {
  min-height: 50vh;
  max-height: 50vh;
}
</style>