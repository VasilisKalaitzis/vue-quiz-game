<template>
  <transition name="slide-fade-left">
    <div class="quest-result" v-if="questResult.visibility">
      <div class="container-padding dialog-box">
        <div class="container-header">
          <span>That's it!</span>
        </div>
        <div class="container-body">
          <!-- <div class="container-row">
            You answered
            <span class="big-fonts">{{ correctAnswers }}</span> correct answers!
          </div>
          <div class="container-row">
            You answered
            <span class="big-fonts">{{ wrongAnswers }}</span> wrong answers!
          </div>
          <div class="container-row">
            Only
            <span class="big-fonts">{{ questResult.resultCompared }}%</span> of the adventurers reached this far!
          </div>-->
          <div class="container-row">
            Thank you
            <span class="big-fonts">so much</span> for your time
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import DialogBox from "../utilities/DialogBox.vue";

export default {
  name: "QuestResult",
  components: {
    DialogBox
  },
  props: {},
  computed: {
    ...mapState(["questResult", "correctAnswers", "wrongAnswers"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.quest-result {
  margin: 0px 5px 0px 0px;
  border-radius: 0 0.3em 0.3em 0;
  background-color: ghostwhite;
  opacity: 0.95;
}
.container-header {
  padding: 1rem 0rem;
  margin-bottom: 0;
  color: inherit;
  /* background-color: #f7f7f7; */
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.container-row {
  padding: 0px 5px 0px 5px;
  margin: 15px 0px 15px 0px;
}
.big-fonts {
  font-size: 1.5em;
}
</style>
