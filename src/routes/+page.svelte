<script lang="ts">
	import Bio from './composant/Bio.svelte';
	import Blog from './composant/Blog.svelte';
    import Experiences from './composant/Experiences.svelte';
    import Footer from './composant/Footer.svelte';
	import FrontEnd from './composant/FrontEnd.svelte'
    import Hobbies from './composant/Hobbies.svelte';
    import Pagging from './composant/Pagging.svelte';
	import Project from './composant/Project.svelte'
	import Projects from './composant/Projects.svelte'

	import picture from './lib/assets/picture.jpg';
	import css from './lib/assets/css.png';
	import peugeot from './lib/assets/peugeot.jpg';
	import tesla from './lib/assets/tesla.jpg';
	import gaming from './lib/assets/gaming.webp';
	import cooking from './lib/assets/cooking.jpg';
	import biking from './lib/assets/biking.jpeg';
	import checkout from './lib/assets/checkout.png';
	import recipe from './lib/assets/recipe.png';
	import gallery from './lib/assets/gallery.png';

	let description = "In this project, I work with HTML and CSS to create a \
						responsive page. This page is similiar with a page. \
						The design is from devchallenge.io";
	let tags = ["HTML", "CSS", "responsive"];

	let projects = [
		{
			tags, description,
			title: "Recipe Blog",
			image: recipe,
			lienDemo: "https://recipe.bryanledda.fr/",
			lienCode: "https://github.com/louchebem06/Recipe-page-devchallenge.io"
		},
		{
			tags, description,
			title: "My Gallery",
			image: gallery,
			lienDemo: "https://gallery.bryanledda.fr/",
			lienCode: "https://github.com/louchebem06/My-Gallery-devchallenge.io"
		},
		{
			tags, description,
			title: "Checkout",
			image: checkout,
			lienDemo: "https://checkout.bryanledda.fr/",
			lienCode: "https://github.com/louchebem06/Checkout-Page-devchallenge.io"
		}
	]

	let hobbies = [
		{
			image: gaming,
			title: "Gaming",
			description: "Quisque feugiat malesuada molestie."
		},
		{
			image: cooking,
			title: "Cooking",
			description: "Quisque feugiat malesuada molestie."
		},
		{
			image: biking,
			title: "Biking",
			description: "Quisque feugiat malesuada molestie."
		}
	]

	let bio = {
		img: picture,
		fullname: "Dwayne Johnson",
		title: "Front-end developer",
		description: [
						"Self-motivated developer, who is willing to learn and create outstanding UI applications.",
						"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
					],
		mail: "billy@example.com",
		phone: "(+603) 546 624 342"		
	}

	let blog = {
		title:"How to organize your CSS",
		image: css,
		description : [
			"In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.",
			"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
		],
		websiteName:"dev.to",
		websiteLink:"https://dev.to/"
	}

	let experiences = [
		{
			image: peugeot,
			date:"Feb 2017 - Current",
			title:"Front-end developer",
			description:"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
		},
		{
			image: tesla,
			date:"Aug 2016 - Feb 2018",
			title:"Full-stack developer",
			description:"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
		}
	]
</script>

<svelte:head>
	<title>Portfolio - devchallenges.io</title>
</svelte:head>

<div class="content">
	<section>
		<Bio {...bio}/>
	</section>

	<div class="col">

		<div class="first">
			<section>
				<FrontEnd title="Front End"/>
			</section>

			<section>
				<Hobbies {hobbies}/>
			</section>
		</div>

		<div class="second">
			<section>
				<Blog {...blog}/>
			</section>

			<section>
				<Experiences {experiences} />
			</section>
		</div>

	</div>

	<section>
		<Projects number={projects.length} {tags}/>
	</section>

	<section class="projects">
		{#each projects as project}
			<Project {...project}/>
		{/each}
	</section>

	<section>
		<Pagging />
	</section>

	<section>
		<Footer />
	</section>
</div>

<style>
	.content {
		margin: auto;
		display: block;
		max-width: 1050px;
		padding-top: 30px;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.projects {
		display: flex;
		justify-content: space-between;
	}

	section {
		padding: 20px 0;
	}

	.col {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.second {
		max-width: 570px;
		transform: translateX(-45px);
	}
</style>
