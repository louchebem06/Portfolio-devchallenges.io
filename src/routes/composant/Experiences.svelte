<script lang="ts">
	interface Iexperance {
		image: string,
		date: string,
		title: string,
		description: string
	}

	export let experiences: Array<Iexperance>;
</script>

<div class="content">
	<h1>Experiences</h1>
	{#each experiences as experience}
		<div class="xp">
			<img src={experience.image} alt="logo marques">
			<div class="content_xp">
				<h2>{experience.date}</h2>
				<h3>{experience.title}</h3>
				<p>{experience.description}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

	.content {
		background: #FFFFFF;
		border-radius: 12px;
		padding: 23.47px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	h1 {
		margin-bottom: -3px;
	}

	img {
		display: block;
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 12px;
	}

	.xp {
		display: flex;
		gap: 20px;
	}

	.content_xp {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	h2, h3 {
		margin: 0;
		padding: 0;
	}

	h1 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 29px;
		color: #4F4F4F;
	}

	h2 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: #828282;
	}

	h3 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
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

	@media only screen and (max-width: 1049px) {
		.content {
			width: auto;
		}
	}
</style>
