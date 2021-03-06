import { number, object, string } from '@recoiljs/refine';
import { atom } from 'recoil';
import { syncEffect } from 'recoil-sync';

export type BookConfig = {
  config: {
    fontSize: number;
    chinseFontFamily: string;
    englishFontFamily: string;
    fontFamily: string;
  };
  fileId: string;
  // currentPage: string;
};

export const defaultBookConfig: BookConfig = { config: { fontSize: 28, chinseFontFamily: '', englishFontFamily: '', fontFamily: '', }, fileId: '' };

export const storeKey = "recoil-sync-indexedDB";

export const bookConfigState = atom({
  key: "bookConfigState",
  default: defaultBookConfig,
  effects: [
    syncEffect({
      storeKey: storeKey,
      refine: object({
        config: object({
          fontSize: number(),
          chinseFontFamily: string(),
          englishFontFamily: string(),
          fontFamily: string()
        }),
        fileId: string(),
      })

    }),
  ],
});
