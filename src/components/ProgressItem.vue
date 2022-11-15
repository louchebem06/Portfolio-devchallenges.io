<template>
	<div>
		<p>
			<slot name="name"></slot>
		</p>
		<progress max="100" :value="80"></progress>
	</div>
</template>

<style scoped>
	p {
		background-color: white;
		color: #4F4F4F;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 50px;
	}

	* {
		margin: 0;
		padding: 0;
	}
</style>