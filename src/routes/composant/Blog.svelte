<script lang="ts">
	export let title: string;
	export let image: string;
	export let description: string;
	export let websiteName: string;
	export let websiteLink: string;
</script>

<div class="content">
	<h1>Blog</h1>
	<div class="title">
		<h2>{title}</h2>
		<img src="{image}" alt="img alt" />
	</div>
	<p>{description}</p>
	<a href="{websiteLink}">{websiteName}</a>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

	.content {
		background: #FFFFFF;
		border-radius: 12px;
		width: 670px;
		padding: 23.47px;
		overflow: hidden;
	}

	h1, h2, p, a {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
	}

	h1 {
		font-size: 16px;
		line-height: 20px;
		color: #E0E0E0;
	}

	h2 {
		font-size: 24px;
		line-height: 29px;
		color: #333333;
	}

	p {
		font-size: 16px;
		line-height: 20px;
		color: #828282;
		max-width: 80%;
		padding-bottom: 30px;
	}

	a {
		font-size: 16px;
		line-height: 20px;
		color: #2F80ED;
		text-decoration: none;
	}

	img {
		display: block;
		border-radius: 12px;
		width: 50%;
		transform: translateX(50px);
	}

	.title {
		display: flex;
		justify-content: space-between;
		padding-bottom: 30px;
	}
</style>