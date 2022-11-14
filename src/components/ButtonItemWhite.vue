<template>
	<a href="#">
		<slot name="name"></slot>
	</a>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

	a {
		text-decoration: none;
		color: white;
		background-color: #2F80ED;
		border-radius: 12px;
		padding: 10px 30px;
		font-family: 'Montserrat', sans-serif;
	}
</style>
