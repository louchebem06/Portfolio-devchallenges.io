<script setup lang="ts">
import CardItem from './CardItem.vue';
import ProgressItem from './ProgressItem.vue';
</script>

<template>
	<CardItem>
		<template #body>
			<ProgressItem>
				<template #name>React</template>
			</ProgressItem>
			<ProgressItem>
				<template #name>Javascript</template>
			</ProgressItem>
			<ProgressItem>
				<template #name>CSS</template>
			</ProgressItem>
			<ProgressItem>
				<template #name>Vue</template>
			</ProgressItem>
			<ProgressItem>
				<template #name>Redux</template>
			</ProgressItem>
			<ProgressItem>
				<template #name>React Native</template>
			</ProgressItem>
		</template>
	</CardItem>
</template>

<style scoped>
	div {
		background: #FFFFFF;
		border-radius: 12px;
		padding: 15px;
	}
</style>
