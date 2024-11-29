<script>
	import '../app.css';
</script>

<div class="min-h-screen bg-gray-100">
	<main class="container mx-auto px-4 py-8">
		<slot />
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>