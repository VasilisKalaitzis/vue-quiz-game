<template>
  <div class="quest-handler" v-bind:style="{'display':questHandler.visibility ? 'block' : 'none'}">
    <DialogBox
      componentName="questHandler"
      v-bind:header="questHandler.data[0].header"
      v-bind:body="questHandler.data[0].body"
      v-bind:footer="questHandler.data[0].footer"
      v-bind:feedback="questHandler.data[0].feedback"
    ></DialogBox>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DialogBox from "../utilities/DialogBox.vue";

export default {
  name: "QuestHandler",
  components: {
    DialogBox
  },
  props: {},
  computed: {
    ...mapState(["questHandler"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quest-handler {
  margin: 0px 5px 0px 5px;
  border-radius: 0.3em;
  background-color: white;
  opacity: 0.95;
  min-height: 410px;
}
</style>
