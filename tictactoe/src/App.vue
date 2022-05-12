<template>
  <div>
    <h1>Tic Tac Toe</h1>
    <GridPanel @gridChanged="getMovement" :grid="grid"/>
    <ResetButton @onReset="getMovement" />
  </div>
</template>

<script>
import GridPanel from "./components/GridPanel.vue";
import ResetButton from "./components/ResetButton.vue";

export default {
  name: "App",
  components: {
    GridPanel,
    ResetButton,
  },
  data () {
    return {
      grid: { A: false, B: false, C: false, D: false, E: false, F: false, G: false, H: false, I: false }
    }
  },
  beforeMount() {
    this.getMovement();
  },
  methods: {
    getMovement() {
      fetch('http://localhost:3000/movement')
        .then(res => res.json())
        .then(res => this.grid = res)
    }
  }
};
</script>

<style>
body {
  background-color: #13bdac;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-size: 50px;
}
</style>
