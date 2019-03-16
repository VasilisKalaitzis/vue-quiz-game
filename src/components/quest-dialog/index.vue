<template>
  <div class="quest-dialog" v-bind:style="{'display':questDialog.visibility ? 'block' : 'none'}">
    <DialogBox
      componentName="questDialog"
      v-bind:header="questDialog.data[0].header"
      v-bind:body="questDialog.data[0].body"
      v-bind:footer="questDialog.data[0].footer"
      v-bind:feedback="questDialog.data[0].feedback"
    ></DialogBox>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DialogBox from "../utilities/DialogBox.vue";

export default {
  name: "QuestDialog",
  components: {
    DialogBox
  },
  props: {},
  computed: {
    ...mapState(["questDialog"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quest-dialog {
  border-radius: 0.3em;
  margin: 0px 5px 0px 5px;
  background-color: seashell;
  opacity: 0.9;

  min-height: 200px;
}
</style>
