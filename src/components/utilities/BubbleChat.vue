<template>
  <div class="bubble-chat" v-if="msg">
    <span v-html="msg"></span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DialogBox",
  props: {
    msg: String
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.bubble-chat {
  position: relative;
  background: white;
  border-radius: 0.6em;
  min-height: 60%;
  width: 150px;
  opacity: 0.9;

  font-size: 0.9em;
}

.bubble-chat:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 90px;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-top-color: white;
  border-bottom: 0;
  border-left: 0;
  margin-left: -15px;
  margin-bottom: -30px;
  opacity: 0.9;
}
</style>
