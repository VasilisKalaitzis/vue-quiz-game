<template>
  <transition name="slide-fade">
    <div class="quest-handler" v-if="questHandler.visibility">
      <DialogBox
        componentName="questHandler"
        v-bind:header="questHandler.data[questHandler.dataCounter].header"
        v-bind:body="questHandler.data[questHandler.dataCounter].body"
        v-bind:footer="questHandler.data[questHandler.dataCounter].footer"
      ></DialogBox>
    </div>
  </transition>
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
  margin: 0px 0px 0px 5px;
  border-radius: 0.3em;
  background-color: white;
  opacity: 0.95;
  min-height: 480px;
}
</style>
