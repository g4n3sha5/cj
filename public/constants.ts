import deximg from '@/public/images/dex.png';
import pumpimg from '@/public/images/pump.png';
import twitterimg from '@/public/images/twitter.png';
import telegramimg from '@/public/images/telegram.png';
import dextoolsimg from '@/public/images/dextools.svg';

export const ca: string = '';
export const telegram = 'https://t.me/CarlJohnsonSUI';
``;
export const twitter = 'https://x.com/CarlJohnsonSui';
export const dextools = '';

// export const dex = true && ca != '' ? `https://www.pump.fun/${ca}` : '';
export const dex = '';
// export const dex = true && ca != '' ? `` : '';

// export const pump: string p= ca != '' ? `https://www.pump.fun/${ca}` : '';

export const buttons = [
  { text: 'Twitter', url: twitter, img: twitterimg },
  { text: 'Telegram', url: telegram, img: telegramimg },
  // { text: 'PumpFun', url: pump, img: pumpimg },
  { text: 'DexScreener', url: dex, img: deximg },
  { text: 'DexTools', url: dextools, img: dextoolsimg },
].filter((button) => button.url != '');
