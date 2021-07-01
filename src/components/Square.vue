<template>
  <div
    class="square"
    :style="{ backgroundColor: color }"
    @click="onClick()"
  ></div>
</template>

<script>
export default {
  name: "Square",
  props: {
    color: String,
    onClick: Function,
  },
};
</script>

<style scoped lang="css">
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
