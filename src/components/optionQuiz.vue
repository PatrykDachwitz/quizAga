<script setup>
defineProps(['name']);


</script>

<template>
  <div class="quizOption w-100">
    <button class="btn btn-primary fs-2 w-100 my-2" >
      {{ name }}
    </button>
  </div>
</template>

<style scoped>
.quizOption {

}
</style>