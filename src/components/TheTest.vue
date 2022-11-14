<script setup lang="ts">
import ButtonItemWhite from './ButtonItemWhite.vue'
import CardItem from './CardItem.vue';
</script>

<template>
	<ButtonItemWhite name="Wesh">
		<template #name>Demo</template>
	</ButtonItemWhite>

	<CardItem>
		<template #content>
			<h3>Wesh la zone</h3>
		</template>
	</CardItem>
</template>
