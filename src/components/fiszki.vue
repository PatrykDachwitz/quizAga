<script setup>
defineProps(['muscle']);

</script>

<template>
  <div class="fiszkiContainer" :data-id-fiszki="muscle.id">
    <div class="imageContainer">
      <img :src="'/' + muscle.imgSrc + '.JPG'" height="200"/>
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

  display: flex;
  justify-content: center;
  align-items: center;
}
.imageContainer img {
  max-height: 80vh;
}
.queryContainer {

}
</style>