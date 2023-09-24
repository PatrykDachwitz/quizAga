<script setup>
import {ref, inject, provide, watch, watchEffect} from "vue";
import optionQuiz from "@/components/optionQuiz.vue"
import fiszki from '@/components/fiszki.vue'
import {getMuscle} from "@/js/muscle";
import {changeFiszki} from "@/js/changeFiszki";
import Games from "@/components/games.vue";
import {getRandomArbitrary} from "@/js/getRandomArbitrary";
import {randomMuscule} from "@/js/randomMuscule";

const musculeFiszki = ref(null)
const musculeQuery = ref(null)
const mainOptions = [
    'Quiz',
    'Fiszki',
]


const querysValue = ref(null)
function displayContent() {
  let quizContainer = document.querySelector('div.quizContainer');
  quizContainer.classList.add('d-none');
}
function activeFiszki(category) {
  musculeFiszki.value = getMuscle(category);
  let firstID = musculeFiszki.value[0].id;
  let lastID = musculeFiszki.value[musculeFiszki.value.length - 1].id;


  setTimeout(() => {
    let first = document.querySelector('div[data-id-fiszki="' + firstID + '"]');
    first.classList.remove('d-none');
    let fiszkiActiveDiv = document.querySelector('div.fiszkiActiveDiv');
    fiszkiActiveDiv.dataset.endId = lastID;
    fiszkiActiveDiv.dataset.startId = firstID;
    fiszkiActiveDiv.dataset.currentId = firstID;
    fiszkiActiveDiv.classList.remove('d-none');
  }, 100)
}
function activeQuery(category) {
  musculeQuery.value = getMuscle(category);
  let firstID = musculeQuery.value[0].id;
  let lastID = musculeQuery.value[musculeQuery.value.length - 1].id;
  let randomNuber = getRandomArbitrary(firstID, lastID);


  querysValue.value = randomMuscule(randomNuber, musculeQuery.value)
  setTimeout(() => {
    let first = document.querySelector('div[data-id-query="' + randomNuber + '"]');
    first.classList.remove('d-none');
    let queryActiveDiv = document.querySelector('div.queryActiveDiv');
    queryActiveDiv.dataset.endId = lastID;
    queryActiveDiv.dataset.startId = firstID;
    queryActiveDiv.dataset.currentId = randomNuber;
    queryActiveDiv.classList.remove('d-none');
  }, 100)
}


const currentCategoryOption = ref(null);
const categoryQuery = [
    'Mięśnie ręki',
    'Mięśnie nogi',
    'Mięśnie tułowia',
    'Wszystkie',
    'Powrót',
]

const currentOptions = ref(null);
currentOptions.value = mainOptions;

function selectedOptions(nameOption) {
console.log(currentCategoryOption.value)
  switch (currentCategoryOption.value) {
    case null:
      switch (nameOption) {
        case "Quiz":
          currentCategoryOption.value = "Quiz";
          currentOptions.value = categoryQuery;
          break;
        case "Fiszki":
          currentCategoryOption.value = "Fiszki";
          currentOptions.value = categoryQuery;
          break;
      }
      break;
    case "Fiszki":
      switch (nameOption) {
        case 'Mięśnie ręki':
          displayContent();
          activeFiszki(0);
          break;
        case 'Mięśnie nogi':
          displayContent();
          activeFiszki(1);
          break;
        case 'Mięśnie tułowia':
          displayContent();
          activeFiszki(2);
          break;
        case 'Wszystkie':
          displayContent();
          activeFiszki(3);
          break;
        case 'Powrót':
          currentCategoryOption.value = null;
          currentOptions.value = mainOptions;
          break;
      }
      break;
    case "Quiz":
      switch (nameOption) {
        case 'Mięśnie ręki':
          displayContent();
          activeQuery(0);
          break;
        case 'Mięśnie nogi':
          displayContent();
          activeQuery(1);
          break;
        case 'Mięśnie tułowia':
          displayContent();
          activeQuery(2);
          break;
        case 'Wszystkie':
          displayContent();
          activeQuery(3);
          break;
        case 'Powrót':
          currentCategoryOption.value = null;
          currentOptions.value = mainOptions;
          break;
      }
      break;
  }
}
function changeFiszkiBack() {
  let quizContainer = document.querySelector('div.quizContainer');
  let fiszkiActiveDiv = document.querySelector('div.fiszkiActiveDiv');
  fiszkiActiveDiv.classList.add('d-none');
  currentCategoryOption.value = "Fiszki";
  currentOptions.value = categoryQuery;
  quizContainer.classList.remove('d-none');
}

function changeQueryBack() {
  let quizContainer = document.querySelector('div.quizContainer');
  let fiszkiActiveDiv = document.querySelector('div.queryActiveDiv');
  fiszkiActiveDiv.classList.add('d-none');
  currentCategoryOption.value = "Quiz";
  currentOptions.value = categoryQuery;
  quizContainer.classList.remove('d-none');
}

const doubleVerificationValue = ref(true);

const testQuery = ref(false);
const newRandomNumber = ref(null);
function changeQueryContent() {

  newRandomNumber.value = null;

    let queryActiveDiv = document.querySelector('div.queryActiveDiv');
    let firstId = queryActiveDiv.dataset.startId;
    let endId = queryActiveDiv.dataset.endId;
    let currentId = queryActiveDiv.dataset.currentId;
    console.log("firstId: " + firstId);
    console.log("endId: " + endId);
    newRandomNumber.value = getRandomArbitrary(parseInt(firstId), parseInt(endId));

  console.log("newRandomNumber.value: " + newRandomNumber.value);

  querysValue.value = randomMuscule(newRandomNumber.value, musculeQuery.value)

  let actualActive = document.querySelector('div[data-id-query="' + currentId + '"]')
  let newActiveQuery = document.querySelector('div[data-id-query="' + newRandomNumber.value + '"]')
  console.log('div[data-id-query="' + newRandomNumber.value + '"]');
  console.log(newActiveQuery);
  actualActive.classList.add('d-none');
  newActiveQuery.classList.remove('d-none');
  queryActiveDiv.dataset.currentId = newRandomNumber.value;
  testQuery.values = falsere;
}

provide('querysValue', querysValue);
provide('testQuery', testQuery);

watch(testQuery, () =>{
  setTimeout(changeQueryContent, 500);
})

</script>

<template>
   <div class="quizContainer w-50">
    <optionQuiz v-for="(option) in currentOptions" :name="option" @click="selectedOptions(option)" />
  </div>

<div class="position-relative fiszkiActiveDiv d-none" data-end-id="0" data-start-id="0" data-current-id="0">
  <fiszki v-for="(muscle, index) in musculeFiszki" class="d-none" :key="muscle.id" :muscle="muscle" />

  <div class="position-absolute bottom-0 w-100 d-flex justify-content-between buttonNexPrevious">
    <button class="btn btn-primary ms-2 mb-2 fs-5" @click="changeFiszki('previous')">
    Poprzedni
    </button>
    <button class="btn btn-primary me-2 mb-2 fs-5" @click="changeFiszki('next')">
    Następny
    </button>
  </div>
  <div class="position-absolute top-0 left-0">
    <button class="btn btn-primary fs-3 mt-2 ms-2" @click="changeFiszkiBack" >
      <bold>&lt;</bold>
    </button>
  </div>
</div>

<div class="position-relative queryActiveDiv d-none">
  <games v-for="(muscle, index) in musculeQuery" class="d-none" :key="muscle.id" :musculeQuery="musculeQuery" :muscle="muscle" />

  <div class="position-absolute top-0 left-0">
    <button class="btn btn-primary fs-3 mt-2 ms-2" @click="changeQueryBack" >
      <bold>&lt;</bold>
    </button>
  </div>
</div>
</template>

<style scoped>
.fiszkiActiveDiv {
  width: 100%;
}
.queryActiveDiv {
  width: 100%;
}
.buttonNexPrevious {
  min-width: 100%;
}
.quizContainer {
  display: flex;
  flex-direction: column;
}

</style>
