<script lang="ts">
	export let letter: string;
	export let lien: string;
</script>

<a href="{lien}">
	{letter}
</a>

<style>
	a {
		--size: 36px;
		display: block;
		width: var(--size);
		height: var(--size);
		line-height: var(--size);
		border: 1px solid #4F4F4F;
		text-align: center;
		border-radius: 4px;
		color: #4F4F4F;
		text-decoration: none;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
	}

	a:hover {
		border: 1px solid #2F80ED;
		color: #2F80ED;
	}
</style>