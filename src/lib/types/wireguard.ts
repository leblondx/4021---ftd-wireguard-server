export interface WireguardConfig {
    serverAddress: string;
    serverPort: number;
    privateKey: string;
    publicKey: string;
    dns: string[];
    allowedIPs: string[];
    persistentKeepalive: number;
}

export interface Peer {
    name: string;
    publicKey: string;
    allowedIPs: string[];
    lastHandshake?: Date;
    transferRx?: number;
    transferTx?: number;
}