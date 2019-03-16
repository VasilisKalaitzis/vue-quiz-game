<template>
  <div class="container-padding dialog-box">
    <div class="container-header">
      <span v-html="header"></span>
    </div>
    <ul class="dialog-body">
      <li
        class="dialog-row action-button"
        v-for="(row,i) in body"
        :key="i + componentName + 'body'"
      >
        <span v-html="row.text"></span>
      </li>
    </ul>
    <div class="dialog-footer d-flex">
      <div
        class="flex-fill dialog-row action-button"
        v-for="(row,i) in footer"
        :key="i + componentName + 'footer'"
      >
        <span v-html="row.text"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogBox",
  props: {
    componentName: String,
    header: String,
    body: Array,
    footer: Array
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
  font-size: 1em;
}
.action-button {
  cursor: pointer;
}
</style>
