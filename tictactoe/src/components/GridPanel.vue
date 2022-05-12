<template>
  <div class="grid">
    <div class="cell" v-on:click="makeMovement('A')">
      <CrossToken v-if="grid['A'] === 'cross'"/>
      <NoughtToken v-if="grid['A'] === 'circle'"/>
    </div>
    <div class="cell" v-on:click="makeMovement('B')">
      <CrossToken v-if="grid['B'] === 'cross'"/>
      <NoughtToken v-if="grid['B'] === 'circle'"/>
    </div>
    <div class="cell" v-on:click="makeMovement('C')">
      <CrossToken v-if="grid['C'] === 'cross'"/>
      <NoughtToken v-if="grid['C'] === 'circle'"/>
    </div>


    <div class="cell" v-on:click="makeMovement('D')">
      <CrossToken v-if="grid['D'] === 'cross'"/>
      <NoughtToken v-if="grid['D'] === 'circle'"/>
    </div>
    <div class="cell" v-on:click="makeMovement('E')">
      <CrossToken v-if="grid['E'] === 'cross'"/>
      <NoughtToken v-if="grid['E'] === 'circle'"/>
    </div>
    <div class="cell" v-on:click="makeMovement('F')">
      <CrossToken v-if="grid['F'] === 'cross'"/>
      <NoughtToken v-if="grid['F'] === 'circle'"/>
    </div>


    <div class="cell" v-on:click="makeMovement('G')">
      <CrossToken v-if="grid['G'] === 'cross'"/>
      <NoughtToken v-if="grid['G'] === 'circle'"/>
    </div>
    <div class="cell" v-on:click="makeMovement('H')">
      <CrossToken v-if="grid['H'] === 'cross'"/>
      <NoughtToken v-if="grid['H'] === 'circle'"/>
    </div>
    <div class="cell" v-on:click="makeMovement('I')">
      <CrossToken v-if="grid['I'] === 'cross'"/>
      <NoughtToken v-if="grid['I'] === 'circle'"/>
    </div>

  </div>
</template>

<script>
import NoughtToken from "./NoughtToken.vue";
import CrossToken from "./CrossToken.vue";

export default {
  components: {
    NoughtToken,
    CrossToken
},
  data() {
    return {
      grid: { A: false, B: false, C: false, D: false, E: false, F: false, G: false, H: false, I: false }
    }
  },
  props: ['grid'],
  methods: {
    makeMovement(cell) {
      fetch('http://localhost:3000/movement', { method: 'POST', body: JSON.stringify({ cell }),  headers: { 'Content-Type': 'application/json' } })
        .then(res => {
          if (res.ok) {
            this.$emit('gridChanged');
          } else {
            alert(res.statusText);
          }
        })
    }
  }
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
