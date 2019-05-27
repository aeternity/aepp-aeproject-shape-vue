<template>
	<div id="app">
		<Header/>
		<Loading
			class="loading-bars"
			:active="isLoading"
			:is-full-page="true"
			:color="'#F7286E'"
			:loader="'bars'"
		></Loading>
		<ToDo
			:disableToDos="isLoading"
		></ToDo>
	</div>
</template>

<script>
    import ToDo from './components/ToDo.vue';
    import Header from './components/Header.vue';
    import Loading from 'vue-loading-overlay';

    export default {
        name: 'app',
        components: {
            ToDo,
            Loading,
            Header
        },
        computed: {
            isLoading() {
                return this.$store.getters.isLoading;
            }
        }
    }
</script>

<style>
	body {
		margin: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.loading-bars {
		position: absolute;
		top: 100px;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
	}
</style>
