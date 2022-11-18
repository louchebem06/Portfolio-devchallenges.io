<script lang="ts">
	interface Ihobbie {
		image: string,
		title: string,
		description: string
	};
    export let hobbies: Array<Ihobbie>;
</script>

<div class="content">
	<h1>Hobbies</h1>
	{#each hobbies as hobbie}
		<div class="hobbies">
			<img src="{hobbie.image}" alt="img hobbie alt"/>
			<h2>{hobbie.title}</h2>
			<p>{hobbie.description}</p>
		</div>
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

	.content {
		background: #FFFFFF;
		border-radius: 12px;
		width: 415.02px;
		padding: 23.47px;
	}

	img {
		display: block;
		width: 100%;
		height: 120px;
		border-radius: 12px;
		object-fit: cover;
	}

	.hobbies {
		margin-bottom: 50px;
	}

	h1 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 29px;
		color: #4F4F4F;
		margin-bottom: 50px;
	}

	h2 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 22px;
		color: #333333;
	}

	p {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #828282;
	}

</style>
