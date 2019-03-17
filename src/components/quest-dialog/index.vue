<template>
  <transition name="slide-fade-bottom">
    <div class="quest-dialog" v-if="questDialog.visibility">
      <DialogBox
        componentName="questDialog"
        v-bind:header="questDialog.data[questDialog.dataCounter].header"
        v-bind:body="questDialog.data[questDialog.dataCounter].body"
        v-bind:footer="questDialog.data[questDialog.dataCounter].footer"
      ></DialogBox>
    </div>
  </transition>
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
<style lang="less" scoped>
.quest-dialog {
  border-radius: 0.3em;
  margin: 0px 5px 0px 5px;
  background-color: seashell;
  opacity: 0.9;

  min-height: 240px;
}
</style>
