<template>
  <div class="wrapper">
    <div class="container">
      <img
        v-tilt="{'full-page-listening':true, glare:true, reverse:false}"
        class="brain-img"
        src="@/assets/brain.png"
        :width="width"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    width: () => {
      let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      return width * 0.6;
    }
  }
};
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