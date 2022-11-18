<script lang="ts">
	export let firstColor: string;
	export let secondColor: string;
	export let lien: string;
	export let name: string;
</script>

<a href="{lien}" style="
						color:{secondColor};
						background-color:{firstColor};
					">
	{name}
</a>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

	a {
		text-decoration: none;
		border-radius: 12px;
		height: 46px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		border: 1px solid #2F80ED;
		width: 200px;
		margin: 20px 20px 20px 0;
	}
</style>
