<script lang="ts">
	export let name: string;
	export let value: number;
</script>

<div>
	<p>{name}</p>
	<progress value="{value}" max="100"></progress>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	progress {
		-webkit-appearance: none;
   		appearance: none;
		width: 60%;
		height: 10px;
	}

	progress::-webkit-progress-bar {
		border-radius: 12px;
		background-color: #C4C4C4;
	}

	progress::-webkit-progress-value {
		border-radius: 12px;
		background-color: #2F80ED;
	}

	p {
		width: auto;
		color: #4F4F4F;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		white-space: nowrap;
	}

	* {
		margin: 0;
	}
</style>
