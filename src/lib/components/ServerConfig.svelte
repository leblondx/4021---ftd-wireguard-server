<script lang="ts">
    import { wireguardConfig } from '$lib/stores/wireguard';
    import { generateKeyPair } from '$lib/utils/wireguard';

    function generateNewKeys() {
        const { privateKey, publicKey } = generateKeyPair();
        $wireguardConfig.privateKey = privateKey;
        $wireguardConfig.publicKey = publicKey;
    }
</script>

<div class="bg-white shadow rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">Configuration du Serveur</h2>
    <div class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700">Adresse du Serveur</label>
            <input
                type="text"
                bind:value={$wireguardConfig.serverAddress}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
        </div>
        
        <div>
            <label class="block text-sm font-medium text-gray-700">Port</label>
            <input
                type="number"
                bind:value={$wireguardConfig.serverPort}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
        </div>
        
        <div>
            <label class="block text-sm font-medium text-gray-700">Clé Privée</label>
            <div class="flex space-x-2">
                <input
                    type="password"
                    bind:value={$wireguardConfig.privateKey}
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <button
                    on:click={generateNewKeys}
                    class="mt-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Générer
                </button>
            </div>
        </div>
        
        <div>
            <label class="block text-sm font-medium text-gray-700">Clé Publique</label>
            <input
                type="text"
                bind:value={$wireguardConfig.publicKey}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                readonly
            />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">DNS</label>
            <input
                type="text"
                bind:value={$wireguardConfig.dns}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">IPs Autorisées</label>
            <input
                type="text"
                bind:value={$wireguardConfig.allowedIPs}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700">Persistent Keepalive</label>
            <input
                type="number"
                bind:value={$wireguardConfig.persistentKeepalive}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
        </div>
    </div>
</div>