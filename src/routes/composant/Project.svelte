<script lang="ts">
	import Button from './Button.svelte'

	export let tags: Array<string>;
	export let title: string;
	export let description: string;
	export let image: string;
	export let lienDemo: string;
	export let lienCode: string;
</script>

<div class="content">
	<img src="{image}" alt="{image} alt" />
	<div class="tags">
		{#each tags as tag}
			<p>{tag}</p>
		{/each}
	</div>
	<h1>{title}</h1>
	<p class="description">{description}</p>
	<div class="button">
		<Button firstColor="#2F80ED" secondColor="#FFFFFF" lien="{lienDemo}" name="Demo"/>
		<Button firstColor="#FFFFFF" secondColor="#2F80ED" lien="{lienCode}" name="Code"/>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

	* {
		--size: 285px;
	}

	.content {
		background: white;
		border-radius: 12px;
		width: var(--size);
		padding: 20px;
	}

	img {
		display: block;
		border-radius: 12px;
		width: var(--size);
		height: var(--size);
		object-fit: cover;
	}

	.button {
		display: flex;
		justify-content: flex-start;
		gap: 10px;
	}

	.tags {
		display: flex;
		gap: 10px;
	}

	.tags p {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #4F4F4F;
	}

	.tags p::before {
		content: "#";
	}

	.description {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #828282;
	}

	h1 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 29px;
		color: #333333;
	}

	@media only screen and (max-width: 1049px) {
		.content {
			width: auto;
		}
	}
</style>
