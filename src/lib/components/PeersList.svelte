<script lang="ts">
    import { peers } from '$lib/stores/wireguard';
    import type { Peer } from '$lib/types/wireguard';

    function addPeer() {
        const newPeer: Peer = {
            name: `Peer ${$peers.length + 1}`,
            publicKey: '',
            allowedIPs: []
        };
        $peers = [...$peers, newPeer];
    }

    function removePeer(index: number) {
        $peers = $peers.filter((_, i) => i !== index);
    }
</script>

<div class="bg-white shadow rounded-lg p-6 mt-6">
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Pairs</h2>
        <button
            on:click={addPeer}
            class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
            Ajouter un Pair
        </button>
    </div>

    <div class="space-y-4">
        {#each $peers as peer, index}
            <div class="border rounded-lg p-4">
                <div class="flex justify-between items-center mb-2">
                    <input
                        type="text"
                        bind:value={peer.name}
                        class="text-lg font-medium"
                    />
                    <button
                        on:click={() => removePeer(index)}
                        class="text-red-600 hover:text-red-800"
                    >
                        Supprimer
                    </button>
                </div>
                
                <div class="space-y-2">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Clé Publique</label>
                        <input
                            type="text"
                            bind:value={peer.publicKey}
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700">IPs Autorisées</label>
                        <input
                            type="text"
                            bind:value={peer.allowedIPs}
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>