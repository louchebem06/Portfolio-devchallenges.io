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
		gap: 30px;
	}

	progress {
		width: 70%;
	}

	p {
		width: 30%;
		color: #4F4F4F;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
	}

	* {
		margin: 0;
	}
</style>
