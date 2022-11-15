<template>
	<div>
		<slot name="body"></slot>
	</div>
</template>

<style scoped>
	div {
		background: #FFFFFF;
		border-radius: 12px;
		padding: 0px;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
</style>
