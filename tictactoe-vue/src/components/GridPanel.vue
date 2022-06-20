<template>
  <div class="grid">
    <div
      class="cell"
      :key="position"
      v-for="(value, position) in cells"
      @click="play(position)"
    >
      <div v-if="value === 0"><CrossToken /></div>
      <div v-if="value === 1"><NoughtToken /></div>
    </div>
  </div>
</template>

<script>
import NoughtToken from "./NoughtToken.vue";
import CrossToken from "./CrossToken.vue";
import { getMovement } from "./../services/api";

export default {
  components: {
    NoughtToken,
    CrossToken,
  },
  data() {
    return {
      initialPos: 4,
      cells: new Array(9),
    };
  },
  created() {
    this.setInitialDisposition();
  },
  methods: {
    /**
     * Initial computer move
     */
    setInitialDisposition() {
      this.move(1, this.initialPos);
    },
    /**
     * 0 = Cross (User), 1 = Nought (Machine)
     */
    move(user, position) {
      position ??= this.initialPos;
      this.cells[position] ?? this.cells.splice(position, 1, user);
    },
    /**
     * Permforms user's move a triggers the next turn
     */
    async play(position) {
      this.move(0, position);
      this.getStatus() || (await this.getComputerPosition());
    },
    /**
     * Get computer's next move
     */
    async getComputerPosition() {
      const move = await getMovement(this.cells);
      this.move(1, move);
      this.getStatus();
    },
    /**
     * Checks the game status (is there a winner?)
     */
    getStatus() {},
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
