import {Inter} from 'next/font/google'
import { Teko } from 'next/font/google';
import { Lusitana } from 'next/font/google';
// get specific font style from google
export const inter = Inter({subsets: ['latin']});
export const teko = Teko({subsets: ['latin'], weight: '700'});
export const lusitana = Lusitana({weight: ['400', '700'], subsets: ['latin']});