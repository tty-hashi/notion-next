import { PageType, RichTextType } from "../types/types";

/**
 * すべてのrichText 内の palain_text を結合して、文字列で返す
 * @param richTextArray 各オブジェクトの中のrichText
 * @returns {string} 結合して文字列を返す
 */
export const getText = (richTextArray: RichTextType[]): string => {
  try {
    const textArray = richTextArray.map((richText) => richText.plain_text);
    return textArray.join("");
  } catch (err) {
    console.log(err);
  }
  return "";
};

/**
 * カバー画像のパスを返す関数
 * @param cover
 * @returns {string} 画像のパス
 */
export const getCover = (cover: PageType["cover"]): string => {
  if (cover && cover.file) return cover.file.url;
  if (cover && cover.external) return cover.external.url;
  return "/noimage.png";
};

/**
 * 投稿した日付を取得してそれを返す関数
 * @param date publiched の中の date
 * @returns {string} 日付
 */
export const getDate = (date: { start: string }): string => {
  try {
    return date.start;
  } catch (err) {
    console.log(err);
  }
  return "-";
};

export const getMultiSelect = (multiSelect: [{ name: string }]) => {
  try {
    return multiSelect.map((tag) => tag.name);
  } catch (err) {
    console.log(err);
  }
  return [];
};
