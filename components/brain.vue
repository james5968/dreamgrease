<template>
  <div class="wrapper">
    <div class="container">
      <img
        v-tilt="{'full-page-listening':true, glare:true, reverse:false}"
        class="brain-img"
        src="@/assets/brain.png"
        width="600"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container {
  position: relative;
}
</style>