<template>
  <div
    class="image-container bgrd-image"
    v-bind:style="{ 'backgroundImage': backgroundImage, backgroundSize: backgroundSize, backgroundPosition:backgroundPosition }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      default: "'../../assets/loader.gif",
      type: String,
      required: false
    },
    parallaxSpeed: {
      default: 10,
      type: Number,
      required: false
    },
    backgroundImage: String,
    backgroundSize: {
      default: "100%",
      type: String,
      required: false
    },
    backgroundPosition: {
      default: "bottom",
      type: String,
      required: false
    }
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      var scrollTop = document.documentElement.scrollTop;
      this.backgroundSize = 100 + scrollTop / this.parallaxSpeed + "%";
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
.bgrd-image {
  background-image: url("../../assets/mountain_slide1.jpg");
}
.image-container {
  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.responsive-img {
  padding: 1rem;
  width: 100%;
  height: auto;
}
</style>
