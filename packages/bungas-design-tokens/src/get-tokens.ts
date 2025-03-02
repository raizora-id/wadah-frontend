import { CustomFoundation } from "./js/default-foundation";
import { Tokens } from "./js/create-tokens";
import createTheme from "./js/create-theme";

export type GetTokens = (foundation?: CustomFoundation) => Tokens;

const getTokens: GetTokens = (foundation = {}) => {
  return createTheme(foundation);
};

export default getTokens;