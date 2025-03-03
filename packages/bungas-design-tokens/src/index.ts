import createTheme from "./js/create-theme";
import { Tokens as PaletteColors } from "./js/palette-colors.d";

// INITIATE
export const defaultTokens = createTheme();
export const defaultTheme = createTheme();

// CORE FUNCTION
export { default as transparentColor } from "./js/transparent-color";
export { default as getTokens } from "./get-tokens";
export { default as tokensToCssVars } from "./tokens-to-css-vars";
export { default as defaultFoundation } from "./js/default-foundation";


// UTILS
export { default as convertHexToRgba } from "./utils/convert-hex-to-rgba";
export { default as convertRgbaToHex } from "./utils/convert-rgba-to-hex";
export { default as fromPlainObject } from "./utils/from-plain-object";
export { createTheme, PaletteColors };