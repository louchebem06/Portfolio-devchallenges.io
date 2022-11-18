<script>
    import PageButton from "./PageButton.svelte";

</script>
<div>
	<PageButton letter="<" lien="#"/>
	<PageButton letter="1" lien="#"/>
	<PageButton letter="2" lien="#"/>
	<PageButton letter="3" lien="#"/>
	<p>...</p>
	<PageButton letter="10" lien="#"/>
	<PageButton letter=">" lien="#"/>
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