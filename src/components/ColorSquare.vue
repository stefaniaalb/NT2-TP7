<template>
  <section class="src-components-ColorSquare">

    <div id="header">
		<h1>The Great <br>
			<span id="colorDisplay">RGB</span>
			<br>
			Guessing Game</h1>
	</div>

  <div id="navigator">
		<button id="reset"> New colors</button>
		<span id="message"> </span>

		<button id="easy">easy</button>
		<button id="hard" class="selected">hard</button>
	</div>

  <div id="container">
		<div class="square"></div>
		<div class="square"></div>
		<div class="square"></div>
		<div class="square"></div>
		<div class="square"></div>
		<div class="square"></div>
	</div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-ColorSquare',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-ColorSquare {

  }
	
</style>
