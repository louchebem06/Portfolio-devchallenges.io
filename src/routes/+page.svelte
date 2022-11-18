<script lang="ts">
	import Bio from './composant/Bio.svelte';
	import Blog from './composant/Blog.svelte';
	import FrontEnd from './composant/FrontEnd.svelte'
    import Hobbies from './composant/Hobbies.svelte';
	import Project from './composant/Project.svelte'
	import Projects from './composant/Projects.svelte'

	let description = "In this project, I work with HTML and CSS to create a \
						responsive page. This page is similiar with a page. \
						The design is from devchallenge.io";
	let tags = ["HTML", "CSS", "responsive"];

	let projects = [
		{
			tags, description,
			title: "Recipe Blog",
			image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png",
			lienDemo: "#",
			lienCode: "#"
		},
		{
			tags, description,
			title: "My Gallery",
			image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png",
			lienDemo: "#",
			lienCode: "#"
		},
		{
			tags, description,
			title: "Checkout",
			image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png",
			lienDemo: "#",
			lienCode: "#"
		}
	]

	let hobbies = [
		{
			image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png",
			title: "Gaming",
			description: "Quisque feugiat malesuada molestie."
		},
		{
			image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png",
			title: "Cooking",
			description: "Quisque feugiat malesuada molestie."
		},
		{
			image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png",
			title: "Biking",
			description: "Quisque feugiat malesuada molestie."
		}
	]

	let bio = {
		img: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png",
		fullname: "Billy Pearson",
		title: "Front-end developer",
		description: [
						"Self-motivated developer, who is willing to learn and create outstanding UI applications.",
						"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
					],
		mail: "billy@example.com",
		phone: "(+603) 546 624 342"		
	}
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
				<Blog	title="How to organize your CSS"
						image="https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png"
						description="In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
						Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
						websiteName="dev.to"
						websiteLink="https://dev.to/"/>
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
</div>

<style>
	.content {
		margin: auto;
		display: block;
		max-width: 1200px;
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
		padding: 10px 0;
	}

	.col {
		display: flex;
		justify-content: space-between;
	}

</style>
