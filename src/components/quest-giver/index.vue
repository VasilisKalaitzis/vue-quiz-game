<template>
  <div class="m-sidebar">
    <Assistant
      v-bind:visibility="questGiver.assistant.visibility"
      v-bind:roaming="questGiver.assistant.roaming"
      v-bind:positionTop="questGiver.assistant.positionTop"
      v-bind:positionLeft="questGiver.assistant.positionLeft"
      v-bind:feedback="questGiver.assistant.feedback"
    ></Assistant>
  </div>
</template>

<script>
import Assistant from "../utilities/Assistant.vue";
import { mapState } from "vuex";

export default {
  name: "QuestGiverContainer",
  components: {
    Assistant
  },
  props: {},
  computed: {
    ...mapState(["questGiver"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.m-sidebar {
  border-radius: 0.3em;
  margin: 0px 10px 10px 10px;
  /* background-color: seashell; */
  opacity: 0.9;

  height: 200px;
}
</style>
