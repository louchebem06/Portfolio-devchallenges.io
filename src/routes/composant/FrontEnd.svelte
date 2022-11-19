<script lang="ts">
	import Skill from './Skill.svelte'

	export let title: string;
</script>

<div class="content">
	<h1>{title}</h1>
	<div class="skill">
		<Skill name="React" value={60}/>
		<Skill name="Javascript" value={80}/>
		<Skill name="CSS" value={90}/>
		<Skill name="Vue" value={60}/>
		<Skill name="Redux" value={80}/>
		<Skill name="React Native" value={90}/>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

	.content {
		background: #FFFFFF;
		border-radius: 12px;
		width: 100%;
		padding: 23.47px;
	}

	h1 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		text-transform: uppercase;
		margin-bottom: 17.07px;
	}

	* {
		margin: 0;
	}

	.skill {
		display: flex;
		flex-direction: column;
		gap: 17.07px;
	}
</style>
