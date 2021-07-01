<template>
  <div id="app">
    <Header :pickedColor="pickedColor" :winner="winner" />
    <Navigator
      :difficulty="difficulty"
      :message="message"
      :reset="reset"
      :setDifficulty="setDifficulty"
			:winner="winner"
    />
    <div id="container">
      <Square
        v-for="(color, index) in colorCount"
        :color="colors[index]"
        :key="index"
				:onClick="() => onSquareClick(index)"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigator from "./components/Navigator.vue";
import Square from "./components/Square.vue";
import { HARD } from "./difficulties";

export default {
  name: "App",
  components: {
    Header,
    Navigator,
    Square,
  },
  data() {
    return {
      colors: [],
      difficulty: HARD,
			message: "",
			pickedColor: "",
			winner: false,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    isHard() {
      return this.difficulty === HARD;
    },
    colorCount() {
      return this.isHard ? 6 : 3;
    },
  },
  methods: {
    createNewColors(quantity) {
      const arr = [];

      for (let i = 0; i < quantity; i++) {
        arr.push(this.createRandomStringColor());
      }

      return arr;
    },

    createRandomStringColor() {
      return `rgb(${this.randomInt()}, ${this.randomInt()}, ${this.randomInt()})`;
    },
	
		init() {
			this.colors = this.createNewColors(this.colorCount);
			this.pickedColor = this.colors[this.pickColor()];
		},

		onSquareClick(index) {
			const clickedColor = this.colors[index];

			if (clickedColor === this.pickedColor) {
				this.winner = true;
				this.colors = this.colors.map(() => this.pickedColor);
				this.message = "You Picked Right!";
			} else {
				this.colors = this.colors.map((color, idx) => idx === index ? "#232323" : color);
				this.message = "Try Again!";
			}
		},

    pickColor() {
      return Math.floor(Math.random() * this.colorCount);
    },

    randomInt() {
      return Math.floor(Math.random() * 256);
    },

    reset() {
			this.$store.state.message = "";
			this.$store.statewinner = false;
			this.init();
    },

    setDifficulty(difficulty) {
			if (this.difficulty !== difficulty) {
				this.difficulty = difficulty;
				this.reset();
			}
    },
  },
};
</script>

<style>
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}

#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
