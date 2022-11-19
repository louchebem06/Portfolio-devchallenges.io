<script lang="ts">
	export let letter: string;
	export let lien: string;
	export let cliqued: boolean;
</script>

{#if cliqued}
<a class="cliqued" href="{lien}">
	{letter}
</a>
{:else}
<a href="{lien}">
	{letter}
</a>
{/if}

<style>
	a {
		--size: 36px;
		width: var(--size);
		height: var(--size);
		border: 1px solid #4F4F4F;
		text-align: center;
		border-radius: 4px;
		color: #4F4F4F;
		text-decoration: none;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a:hover {
		border: 1px solid #2F80ED;
		color: #2F80ED;
	}

	.cliqued {
		background-color: #2F80ED;
		color: white;
		border: 1px solid #2F80ED;
	}
</style>