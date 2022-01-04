# @akroma-project/akroma-erc20-token-list

List of all ERC20 tokens on the Akroma Network (akroma.org). This library is forked from [ethereum-lists/src/tokens/eth/](https://github.com/MyEtherWallet/ethereum-lists/tree/master/src/tokens/eth)

## How to use

```javascript
const { getTokenInfo } = require('@akroma-project/akroma-erc20-token-list');

console.info(getTokenInfo('Dumb'));
```

```javascript
import { getTokenInfo } from '@akroma-project/akroma-erc20-token-list';

console.info(getTokenInfo('Dumb'));
```
## API Manual

There is only one API in this library:

```typescript
/**
 * Get the token info.
 *
 * @param symbol The token symbol, e.g., USDT, BNB, LINK, etc.
 * @returns The TokenInfo, undefined if not exists
 */
export declare function getTokenInfo(symbol: string): TokenInfo;
```

Which returns an `TokenInfo`:

```typescript
export interface TokenInfo {
  address: string;
  decimals: number;
  ens_address: string;
  logo: Logo;
  name: string;
  social: Social;
  support: Support;
  symbol: string;
  type: string;
  website: string;
}

export interface Logo {
  height: string;
  ipfs_hash: string;
  src: string;
  width: string;
}

export interface Social {
  blog: string;
  chat: string;
  facebook: string;
  forum: string;
  github: string;
  gitter: string;
  instagram: string;
  linkedin: string;
  reddit: string;
  slack: string;
  telegram: string;
  twitter: string;
  youtube: string;
}

export interface Support {
  email: string;
  url: string;
}
```

## Quick Start

```bash
npx @akroma-project/akroma-erc20-token-list Dumb
```
