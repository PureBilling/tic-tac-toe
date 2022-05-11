<template>
  <div class="grid">
    <div class="cell"><CrossToken /></div>
    <div class="cell"></div>
    <div class="cell"></div>

    <div class="cell"><NoughtToken /></div>
    <div class="cell"></div>
    <div class="cell"></div>

    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
  </div>
</template>

<script>
import NoughtToken from "./NoughtToken.vue";
import CrossToken from "./CrossToken.vue";

export default {
  components: {
    NoughtToken,
    CrossToken,
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px 200px;
  border: solid 5px #0ca192;
}

.grid .cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 5px #0ca192;
  width: 190px;
  height: 190px;
}
</style>
