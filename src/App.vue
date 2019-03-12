<template>
	<div id="app">
		<ToDo/>
	</div>
</template>

<script>
    import ToDo from './components/ToDo.vue'

    export default {
        name: 'app',
        components: {
            ToDo
        }
    }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		margin: 200px;
		color: #2c3e50;
	}
</style>
