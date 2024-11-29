import { writable } from 'svelte/store';
import type { WireguardConfig, Peer } from '$lib/types/wireguard';

export const wireguardConfig = writable<WireguardConfig>({
    serverAddress: '10.0.0.1/24',
    serverPort: 51820,
    privateKey: '',
    publicKey: '',
    dns: ['1.1.1.1', '1.0.0.1'],
    allowedIPs: ['10.0.0.0/24'],
    persistentKeepalive: 25
});

export const peers = writable<Peer[]>([]);