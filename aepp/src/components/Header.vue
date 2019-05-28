<template>
	<header id="header">
		<div class="logo-image">
			<img :src="require('../assets/logo-small.png')" alt="Go to main page"/>
		</div>
		<div class="logo">
			To-Do list vue Æpp
		</div>
	</header>
</template>

<style scoped>
	#header {
		height: 56px;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		background-color: #311b58;
		padding: 0 20px;
		border-bottom: solid 1px #F7286E;
	}

	.logo {
		font-weight: bold;
		font-size: 22px;
		color: white;
		margin: 0 auto;
	}

	img {
		height: 24px;
	}
</style>