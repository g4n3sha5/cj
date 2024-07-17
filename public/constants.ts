import deximg from '@/public/images/dex.png';
import pumpimg from '@/public/images/pump.png';
import twitterimg from '@/public/images/twitter.png';
import telegramimg from '@/public/images/telegram.png';
import dextoolsimg from '@/public/images/dextools.svg';

export const ca: string = '';
export const telegram = '';
export const twitter = '';
export const dextools = '';

export const dex = true && ca != '' ? `https://www.pump.fun/${ca}` : '';
// export const dex = true && ca != '' ? `https://dexscreener.com/solana/${ca}` : '';

export const pump: string = ca != '' ? `https://www.pump.fun/${ca}` : '';

export const buttons = [
  { text: 'Twitter', url: twitter, img: twitterimg },
  { text: 'Telegram', url: telegram, img: telegramimg },
  { text: 'PumpFun', url: pump, img: pumpimg },
  { text: 'DexScreener', url: dex, img: deximg },
  { text: 'DexTools', url: dextools, img: dextoolsimg },
].filter((button) => button.url != '');
