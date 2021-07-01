<template>
  <div id="navigator">
    <button id="reset" @click="reset()">
      {{ !winner ? "New Colors!" : "Play Again!" }}
    </button>
    <span id="message">{{ message }}</span>

    <button
      id="easy"
      v-bind:class="{ selected: difficulty === EASY }"
      @click="setDifficulty(EASY)"
    >
      {{ EASY }}
    </button>
    <button
      id="hard"
      v-bind:class="{ selected: difficulty === HARD }"
      @click="setDifficulty(HARD)"
    >
      {{ HARD }}
    </button>
  </div>
</template>

<script>
import { EASY, HARD } from "../difficulties";

export default {
  name: "Navigator",
  props: {
    difficulty: String,
    message: String,
    reset: Function,
    setDifficulty: Function,
    winner: Boolean,
  },
  data() {
    return {
      EASY,
      HARD,
    };
  },
};
</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}

#message {
  color: #000000;
  display: inline-block;
  width: 20%;
}

button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
button.selected {
  background-color: steelblue;
  color: white;
}
</style>
