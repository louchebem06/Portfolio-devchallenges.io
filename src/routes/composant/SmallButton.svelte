<script lang="ts">
	 export let name: string;
	 export let cliqued: boolean;
</script>

{#if cliqued}
<a class="cliqued"  href="{location.hostname}">
	{name}
</a>
{:else}
<a href="{location.hostname}">
	{name}
</a>
{/if}

<style>
	a {
		text-decoration: none;
		display: block;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 33px;
		text-align: center;
		color: #4F4F4F;
		width: 85px;
		border: 1px solid #4F4F4F;
		border-radius: 12px;
	}

	a:hover {
		color: #2F80ED;
		border: 1px solid #2F80ED;
	}

	.cliqued {
		background-color: #2F80ED;
		color: white;
		border: 1px solid #2F80ED;
	}
</style>