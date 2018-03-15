# Project Unmask
by Blocklime

## Certified Blockchains

Implementing wallet address certification for cryptocurrencies.

## 3rd party software used

1. CFSSL by Cloudflare (https://github.com/cloudflare/cfssl)
  Used to sign certificates on the certificate-authority server
  
2. explorer by etherparty (https://github.com/etherparty/explorer)
  Simple block explorer used as a basis for the demo unmask-explorer

## Components

The project consists of three main parts:

1. **certificate-authority** - server responsible for certification of digital ID and wallet addresses

2. **demo-wallet** - demo software of a wallet with integrated certificate request and verification

3. **unmask-explorer** - demo block explorer for FIU with unmask capabilities

