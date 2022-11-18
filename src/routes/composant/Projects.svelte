<script lang="ts">
	import SmallButton from "./SmallButton.svelte";

	export let number: number;
	export let tags: Array<string>;
</script>

<div class="content">
	<h1>Project{#if number > 1 } s {/if} ({number})</h1>
	<div class="btn">
		{#each tags as tag}
			<SmallButton name={tag} />
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

	.content {
		background: white;
		border-radius: 12px;
		padding: 10px 20px 20px 20px;
	}

	h1 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #4F4F4F;
	}
	
	.btn {
		display: flex;
		gap: 15px;
	}
</style>
