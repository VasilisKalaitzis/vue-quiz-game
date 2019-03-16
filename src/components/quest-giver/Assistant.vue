<template>
  <div
    class="cubic-container"
    ref="cubicContainer"
    v-bind:style="{'display':visibility ? 'block' : 'none'}"
  >
    <div class="cubic" ref="cubic" v-bind:style="{'top':positionTop, 'left':positionLeft}"
    v-on:click="giveFeedback">
      <css-grid gap="0px 0px" :columns="['1fr', '1fr','1fr']" :rows="['1fr','1fr','1fr','1fr']">
        <css-grid-item x="2" y="2" height="3">
          <div class="cubic-body"></div>
        </css-grid-item>
        <css-grid-item x="1" y="1">
          <div class="cubic-left-wing" ref="cubicWing1"></div>
        </css-grid-item>
        <css-grid-item x="3" y="1">
          <div class="cubic-right-wing" ref="cubicWing2"></div>
        </css-grid-item>
      </css-grid>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Power2, TimelineLite } from "gsap/TweenMax";

export default {
  name: "Assistant",
  data() {
    return {
      cubicTimeline: null,
      wingsTimeline: null
    };
  },
  props: {
    visibility: Boolean,
    roaming: Boolean,
    positionTop: String,
    positionLeft: String,
    feedback: Array
  },
  methods: {
    giveFeedback() {
        alert('hi');
    },
    cubicMovement() {
      const { cubicContainer, cubic } = this.$refs;

      this.cubicTimeline = new TimelineMax({
        onComplete: () => this.cubicMovement()
      });

      this.cubicTimeline.to(cubic, 2, {
        top: this.randomHeight(cubicContainer),
        left: this.randomWidth(cubicContainer),
        ease: Back.easeOut.config(1.7)
      });
    },
    wingsMovement() {
      const { cubicWing1, cubicWing2 } = this.$refs;
      this.wingsTimeline = new TimelineMax({
        onComplete: () => this.wingsTimeline.restart()
      });
      this.wingsTimeline.to([cubicWing1], 1, {
        skewY: 10,
        ease: Elastic.easeOut.config(2)
      });
      this.wingsTimeline.to([cubicWing2], 1, {
        skewY: -10,
        ease: Elastic.easeOut.config(2)
      });
    },
    randomHeight(container) {
      var height = container.offsetHeight;
      var randomHeight = Math.floor(Math.random() * (height - 20));
      return randomHeight;
    },
    randomWidth(container) {
      var width = container.offsetWidth;
      var randomWidth = Math.floor(Math.random() * (width - 20));
      return randomWidth;
    }
  },
  mounted() {
    if (this.roaming) {
      this.cubicMovement();
    }
    this.wingsMovement();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cubic-container {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 200px;
}
.cubic {
  position: absolute;
}
.cubic-body {
  background: whitesmoke;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  /* box-shadow: 0 0 50px 20px black; */
  box-shadow: 0 0 20px 20px #e6e6e6;
}
.cubic-body:after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: whitesmoke;
  border-bottom: 0;
  margin-left: -20px;
  margin-bottom: -10px;
}
.cubic-left-wing {
  margin-left: auto;
  background: whitesmoke;
  border-radius: 50%;
  height: 10px;
  width: 35px;
  transform: rotate(30deg);
}
.cubic-right-wing {
  margin-right: auto;
  background: whitesmoke;
  border-radius: 50%;
  height: 10px;
  width: 35px;
  transform: rotate(-30deg);
}
</style>
