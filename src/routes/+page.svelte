<script>
	import FrontEnd from './composant/FrontEnd.svelte'
	import Project from './composant/Project.svelte'

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
</script>

<svelte:head>
	<title>Portfolio - devchallenges.io</title>
</svelte:head>

<div class="content">
	<section>
		<FrontEnd title="Front End"/>
	</section>
	<div class="projects">
		{#each projects as project}
			<Project {...project}/>
		{/each}
	</div>
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
		
		padding-top: 50px; /* REMOVE FOR END */
	}
</style>
