<script>
    import PageButton from "./PageButton.svelte";

</script>
<div>
	<PageButton letter="<" lien="#" cliqued={false}/>
	<PageButton letter="1" lien="#" cliqued={false}/>
	<PageButton letter="2" lien="#" cliqued={true}/>
	<PageButton letter="3" lien="#" cliqued={false}/>
	<p>...</p>
	<PageButton letter="10" lien="#" cliqued={false}/>
	<PageButton letter=">" lien="#" cliqued={false}/>
</div>

<style>
	div {
		display: flex;
		gap: 10px;
		justify-content: flex-end;
		align-items: center
	}
	p {
		font-weight: bold;
		transform: translateY(-3px);
	}
</style>