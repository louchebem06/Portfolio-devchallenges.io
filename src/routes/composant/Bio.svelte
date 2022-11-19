<script lang="ts">
	import call from '../lib/assets/call.svg';
	import mailto from '../lib/assets/mailto.svg';
	
	export let img: string;
	export let fullname: string;
	export let title: string;
	export let description: Array<string>;
	export let mail: string;
	export let phone: string;
</script>

<div class="content">
	<img src={img} alt="img bio" />
	<div class="info">
		<h1>{fullname}</h1>
		<h2>{title}</h2>
		{#each description as descrip }
			<p>{descrip}</p>
		{/each}
		<div class="line">
			<img src={mailto} alt="mailto alt" />
			<a href="mailto:{mail}">{mail}</a>
		</div>
		<div class="line">
			<img src={call} alt="phone img"/>
			<a href="tel:{phone}">{phone}</a>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

	.content {
		background: #FFFFFF;
		border-radius: 12px;
		padding: 23.47px;
		display: flex;
		justify-content: space-between;
	}

	.info * {
		padding: 0;
		margin: 0;
	}

	img {
		display: block;
		width: 250px;
		height: 250px;
		border-radius: 12px;
		object-fit: cover;
	}

	.info {
		width: calc(100% - 250px - 30px);
		position: relative;
	}

	h1 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 29px;
		color: #4F4F4F;
	}

	h2, p, a {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		color: #828282;
		text-decoration: none;
	}

	p:nth-of-type(1) {
		margin-top: 40px;
	}
	p:nth-of-type(2) {
		margin-top: 40px;
	}

	a {
		color: #4F4F4F;
	}

	.line {
		display: flex;
		gap: 10px;
		position: absolute;
	}

	.line img {
		display: block;
		width: 22px;
		height: 22px;
		fill:#FF0000;
	}

	.line:nth-of-type(1) {
		top: 0;
		left: calc(100% - 220px);
	}

	.line:nth-of-type(2) {
		top: 30px;
		left: calc(100% - 220px);
	}
</style>