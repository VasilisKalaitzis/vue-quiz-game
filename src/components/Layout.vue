<template>
  <div class="main-layout">
    <ParallaxImage v-bind:backgroundImageClass="questMap.data[questMap.dataCounter].imageClass">
      <div class="fixed-container">
        <css-grid gap="0px 0px" :columns="['1fr', '2fr']" :rows="['1fr','1fr']">
          <css-grid-item x="1" y="2">
            <QuestDialog v-bind:msg="mimsg"/>
          </css-grid-item>
          <css-grid-item x="2" y="1" height="2">
            <QuestHandler v-bind:msg="questh"/>
          </css-grid-item>
          <css-grid-item x="1" y="1">
            <QuestGiver v-bind:msg="mimsg"/>
          </css-grid-item>
          <css-grid-item x="1" y="1">
            <QuestResult/>
          </css-grid-item>
        </css-grid>
      </div>
      <Assistant
        v-bind:visibility="questMap.assistant.visibility"
        v-bind:roaming="questMap.assistant.roaming"
        v-bind:positionTop="questMap.assistant.positionTop"
        v-bind:positionLeft="questMap.assistant.positionLeft"
        v-bind:feedback="questMap.assistant.feedback"
      ></Assistant>
    </ParallaxImage>
  </div>
</template>

<script>
import ParallaxImage from "./utilities/ParallaxImage.vue";
import QuestGiver from "./quest-giver/index.vue";
import QuestDialog from "./quest-dialog/index.vue";
import QuestHandler from "./quest-handler/index.vue";
import QuestResult from "./quest-result/index.vue";
import Assistant from "./utilities/Assistant.vue";
import { mapState } from "vuex";

export default {
  name: "MainLayout",
  props: {},
  components: {
    ParallaxImage,
    QuestGiver,
    QuestDialog,
    QuestHandler,
    QuestResult,
    Assistant
  },
  data() {
    return {
      mimsg: "Here is Mierelikee",
      questh: "Handler!"
    };
  },
  methods: {
    handleScroll(event) {
      //   if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      //     alert("bottom!");
      //   }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapState(["questMap"])
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main-layout {
  height: 2800px;
}
.fixed-container {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
