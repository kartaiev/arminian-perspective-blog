import { theme } from "@chakra-ui/core";
import { customIcons } from "./lib/icons";

export const bgColor = { light: "white", dark: "gray.800" };
export const bgColorReversed = { light: "gray.800", dark: "gray.300" };
export const color = { light: "gray.700", dark: "gray.300" };
export const colorAlt = { light: "gray.600", dark: "gray.500" };
export const colorReversed = { light: "gray.300", dark: "gray.700" };
export const borderColor = { light: "gray.300", dark: "gray.500" };

export default {
  ...theme,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Menlo, monospace",
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
};
