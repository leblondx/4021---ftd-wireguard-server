<script>
    import ServerConfig from '$lib/components/ServerConfig.svelte';
    import PeersList from '$lib/components/PeersList.svelte';
</script>

<svelte:head>
    <title>WireGuard Server Config</title>
    <meta name="description" content="Configuration du serveur WireGuard" />
</svelte:head>

<div class="max-w-4xl mx-auto py-8 px-4">
    <h1 class="text-2xl font-bold mb-8">Configuration WireGuard</h1>
    <ServerConfig />
    <PeersList />
</div>