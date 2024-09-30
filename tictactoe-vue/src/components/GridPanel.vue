<script setup>
import NoughtToken from './NoughtToken.vue'
import CrossToken from './CrossToken.vue'
import { getMovement } from './../services/api'
import { ref } from 'vue'

const initialPos = ref(4)
const cells = ref(new Array(9))

/**
 * Initial computer move
 */
const setInitialDisposition = () => {
  move(1, initialPos.value)
}

/**
 * 0 = Cross (User), 1 = Nought (Machine)
 */
const move = (user, position) => {
  position ??= initialPos.value
  cells.value[position] ?? cells.value.splice(position, 1, user)
}

/**
 * Permforms user's move a triggers the next turn
 */
const play = async (position) => {
  move(0, position)
  getStatus() || (await getComputerPosition())
}

/**
 * Get computer's next move
 */
const getComputerPosition = async () => {
  const movement = await getMovement(cells.value)
  move(1, movement)
  getStatus()
}

/**
 * Checks the game status (is there a winner?)
 */
const getStatus = () => {
  // TODO: Implement this
}

setInitialDisposition()
</script>

<template>
  <div class="grid">
    <div class="cell" :key="position" v-for="(value, position) in cells" @click="play(position)">
      <div v-if="value === 0"><CrossToken /></div>
      <div v-if="value === 1"><NoughtToken /></div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  border: solid 5px #0ca192;
}

.grid .cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 5px #0ca192;
  width: 90px;
  height: 90px;
}
</style>
