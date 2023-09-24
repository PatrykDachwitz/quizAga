<script setup>
defineProps(['muscle']);

</script>

<template>
  <div class="fiszkiContainer" :data-id-fiszki="muscle.id">
    <div class="imageContainer">
      <img :src="'../src/images/' + muscle.imgSrc + '.JPG'" height="350"/>
    </div>
    <div class="queryContainer row">
      <p class="px-5">
        <div class="fs-2 text-center">
          {{ muscle.name}}
        </div>
        <hr />
        {{ muscle.additional1 }} <hr />
        {{ muscle.additional2 }} <hr />
        {{ muscle.additional3 }} <hr />
        {{ muscle.additional4 }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.fiszkiContainer {
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.imageContainer {
  min-height: 40vh;
  max-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imageContainer img {
  max-height: 80vh;
}
.queryContainer {
  min-height: 60vh;
  max-height: 60vh;
}
</style>