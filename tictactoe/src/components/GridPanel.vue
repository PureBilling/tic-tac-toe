<template>
  <div class="grid">
    <div class="cell" v-on:click="movement('A')">
      <NoughtToken v-if="grid['A'] === 'circle'"/>
      <CrossToken v-if="grid['A'] === 'cross'"/>
    </div>
    <div class="cell" v-on:click="movement('B')">
      <NoughtToken v-if="grid['B'] === 'circle'"/>
      <CrossToken v-if="grid['B'] === 'cross'"/>
    </div>
    <div class="cell" v-on:click="movement('C')">
      <NoughtToken v-if="grid['C'] === 'circle'"/>
      <CrossToken v-if="grid['C'] === 'cross'"/>
    </div>

    <div class="cell" v-on:click="movement('D')">
      <NoughtToken v-if="grid['D'] === 'circle'"/>
      <CrossToken v-if="grid['D'] === 'cross'"/>
    </div>
    <div class="cell" v-on:click="movement('E')">
      <NoughtToken v-if="grid['E'] === 'circle'"/>
      <CrossToken v-if="grid['E'] === 'cross'"/>
    </div>
    <div class="cell" v-on:click="movement('F')">
      <NoughtToken v-if="grid['F'] === 'circle'"/>
      <CrossToken v-if="grid['F'] === 'cross'"/>
    </div>

    <div class="cell" v-on:click="movement('G')">
      <NoughtToken v-if="grid['G'] === 'circle'"/>
      <CrossToken v-if="grid['G'] === 'cross'"/>
    </div>
    <div class="cell" v-on:click="movement('H')">
      <NoughtToken v-if="grid['H'] === 'circle'"/>
      <CrossToken v-if="grid['H'] === 'cross'"/>
    </div>
    <div class="cell" v-on:click="movement('I')">
      <NoughtToken v-if="grid['I'] === 'circle'"/>
      <CrossToken v-if="grid['I'] === 'cross'"/>
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
  beforeMount: function () {
    this.getMovement()
  },
  methods: {
    movement(cell) {
      fetch(`http://localhost:3000/movement`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ cell }) })
        .then(response => response.json())
        .then(res => { 
          console.log(res);
          console.log(this)
          this.grid = res.grid;
        })
    },
    getMovement() { fetch(`http://localhost:3000/movement`)
      .then(response => response.json())
      .then(res => { 
        console.log(res);
        this.grid = res.grid;
      })
  }}
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
