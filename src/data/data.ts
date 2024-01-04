import { type Info } from '@/types/Info';
import { metamask } from './wallets/metamask';
import { uniswap } from './wallets/uniswap';
import { coinbase } from './wallets/coinbase';
import { rainbow } from './wallets/rainbow';
import { safe } from './wallets/safe';
import { den } from './wallets/den';
import { obvious } from './wallets/obvious';
import { zerion } from './wallets/zerion';
import { tokenary } from './wallets/tokenary';
import { ambire } from './wallets/ambire';
import { trustwallet } from './wallets/trustwallet';
import { mathwallet } from './wallets/mathwallet';
import { exodus } from './wallets/exodus';
import { tokenpocket } from './wallets/tokenpocket';
import { gemwallet } from './wallets/gemwallet';
import { phantom } from './wallets/phantom';
import { aurox } from './wallets/aurox';
import { welldone } from './wallets/welldone';
import { enjin } from './wallets/enjin';
import { _1inch } from './wallets/1inch';
import { frame } from './wallets/frame';

export const wallets: Record<string, Info> = {
  Metamask: metamask,
  'Uniswap Wallet': uniswap,
  'Coinbase Wallet': coinbase,
  Rainbow: rainbow,
  'Safe Wallet': safe,
  Den: den,
  Obvious: obvious,
  Zerion: zerion,
  Tokenary: tokenary,
  'Ambire Wallet': ambire,
  'Trust Wallet': trustwallet,
  'Math Wallet': mathwallet,
  Exodus: exodus,
  TokenPocket: tokenpocket,
  Gemwallet: gemwallet,
  Phantom: phantom,
  'Aurox Wallet': aurox,
  'Welldone Wallet': welldone,
  'Enjin Wallet': enjin,
  '1inch Wallet': _1inch,
  'Frame Wallet': frame,
};
