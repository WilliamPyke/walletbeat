import type { Info } from '@/types/Info';

export const taho: Info = {
  url: 'https://www.taho.xyz/',
  submittedByName: '@wpyke',
  submittedByUrl: 'https://warpcast.com/wpyke',
  updatedAt: '11/02/2025',
  updatedByName: '@wpyke',
  updatedByUrl: 'https://warpcast.com/wpyke',
  repoUrl: 'https://github.com/tahowallet/',
  browser: {
    accountType: 'EOA',
    chainCompatibility: {
      configurable: true,
      autoswitch: true,
      ethereum: true,
      optimism: true,
      arbitrum: true,
      base: false,
      polygon: true,
      gnosis: false,
      bnbSmartChain: true,
      avalanche: true,
    },
    ensCompatibility: {
      mainnet: true,
      subDomains: true,
      offchain: true,
      L2s: true,
      customDomains: false,
      freeUsernames: false,
    },
    backupOptions: {
      cloud: false,
      local: true,
      socialRecovery: false,
    },
    securityFeatures: {
      multisig: false,
      MPC: false,
      keyRotation: false,
      transactionScanning: false,
      limitsAndTimelocks: false,
      hardwareWalletSupport: true,
    },
    availableTestnets: {
      availableTestnets: true,
    },
    license: 'OPEN_SOURCE',
    connectionMethods: {
      walletConnect: false,
      injected: true,
      embedded: false,
      inappBrowser: false,
    },
    modularity: {
      modularity: false,
    },
  },
  issues: {
    ensCompatibility: {
      customDomains: ['https://github.com/tahowallet/extension/issues/791'],
    },
  },
};
