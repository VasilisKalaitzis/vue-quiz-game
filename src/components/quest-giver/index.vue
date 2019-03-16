<template>
  <div class="m-sidebar">
    <Assistant
      v-bind:visibility="questGiver.data[0].assistant.visibility"
      v-bind:roaming="questGiver.data[0].assistant.roaming"
      v-bind:positionTop="questGiver.data[0].assistant.positionTop"
      v-bind:positionLeft="questGiver.data[0].assistant.positionLeft"
      v-bind:feedback="questGiver.data[0].assistant.feedback"
    ></Assistant>
  </div>
</template>

<script>
import Assistant from "./Assistant.vue";
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
<style scoped>
.m-sidebar {
  border-radius: 0.3em;
  margin: 0px 10px 10px 10px;
  /* background-color: seashell; */
  opacity: 0.9;

  min-height: 200px;
}
</style>
