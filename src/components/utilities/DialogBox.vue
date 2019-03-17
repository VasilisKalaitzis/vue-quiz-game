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
          v-on:click="handler(row.feedback,row.correct)"
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
import { mapActions, mapState } from "vuex";

export default {
  name: "DialogBox",
  props: {
    componentName: String,
    header: String,
    body: Array,
    footer: Array
  },
  methods: {
    ...mapActions(["handleFeedback", "updateTips", "handleAnswer"]),
    giveFeedback(feedback) {
      this.handleFeedback(feedback);
    },
    submitAnswer(isAnswerCorrect) {
      // TECH DEBT: of course the answer's correctness should not be known to the client. especially to the view
      this.handleAnswer(isAnswerCorrect);
    },
    handler: function(feedback, isAnswerCorrect) {
      this.giveFeedback(feedback);
      this.submitAnswer(isAnswerCorrect);
    },
    showDescription(description) {
      this.updateTips(description);
    },
    hideDescription() {
      this.updateTips(null);
    }
  },
  computed: {
    ...mapState(["correctAnswers", "wrongAnswers"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
.action-button:hover {
  box-shadow: 7px 20px 16px -6px rgba(0, 0, 0, 0.1),
    0 0px 0px 0 rgba(0, 0, 0, 0.1);
}
</style>
