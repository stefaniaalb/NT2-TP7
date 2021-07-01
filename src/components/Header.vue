<template>
  <div id="header" :style="{ backgroundColor: winner ? pickedColor : 'steelblue' }">
		<h1>
      The Great <br />
      <span id="colorDisplay">{{ pickedColor || "RGB" }}</span>
      <br />
			Guessing Game
    </h1>
	</div>
</template>

<script>
  export default  {
    name: 'Header',
    props: {
      pickedColor: String,
      winner: Boolean,
    },
  }
</script>

<style scoped lang="css">
  #header {
    transition: all 0.3s;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;
  }

  h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;
  }

  #colorDisplay {
    font-size: 200%;
  }
</style>
