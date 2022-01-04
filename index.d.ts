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

/**
 * Get the token info.
 *
 * @param symbol The token symbol, e.g., USDT, BNB, LINK, etc.
 * @returns The TokenInfo, undefined if not exists
 */
export declare function getTokenInfoBySymbol(symbol: string): TokenInfo | undefined;

export declare function getTokenInfoByContractAddress(contactAdress: string): TokenInfo | undefined;

export declare function getTokenInfoByName(name: string): TokenInfo | undefined;

export declare function getTokenInfoByENS(ens_address: string): TokenInfo | undefined;
