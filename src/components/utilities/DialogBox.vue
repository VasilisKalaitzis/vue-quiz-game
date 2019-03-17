<template>
  <div class="container-padding dialog-box">
    <div class="container-header">
      <span v-html="header"></span>
    </div>
    <ul class="dialog-body">
      <li
        class="dialog-row action-button"
        v-for="(row,i) in body"
        v-bind:key="i + componentName + 'body'"
      >
        <span
          v-html="row.text"
          v-on:click="giveFeedback(row.feedback)"
          v-on:mouseenter="showDescription(row.description)"
          v-on:mouseleave="hideDescription"
        ></span>
      </li>
    </ul>
    <div class="dialog-footer d-flex">
      <div
        class="flex-fill dialog-row action-button"
        v-for="(row,i) in footer"
        :key="i + componentName + 'footer'"
      >
        <span v-html="row.text" v-on:click="giveFeedback(row.feedback)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DialogBox",
  props: {
    componentName: String,
    header: String,
    body: Array,
    footer: Array
  },
  methods: {
    ...mapActions(["handleFeedback", "updateTips"]),
    giveFeedback(feedback) {
      this.handleFeedback(feedback);
    },
    showDescription(description) {
      this.updateTips(description);
    },
    hideDescription() {
      this.updateTips(null);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-header {
  padding: 1rem 0rem;
  margin-bottom: 0;
  color: inherit;
  /* background-color: #f7f7f7; */
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.dialog-body {
  text-align: left;
}
.dialog-row {
  padding: 0px 5px 0px 5px;
  margin-top: 15px;
  font-size: 0.9em;
}
.action-button {
  cursor: pointer;
}
</style>
