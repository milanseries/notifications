import React from "react";
import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import { appTheme } from "../src/config/theme-override.config";

import { QueryClientProvider, QueryClient } from "react-query";
const queryCache = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (story) => (
    <ThemeProvider theme={appTheme}>
      <QueryClientProvider client={queryCache}>{story()}</QueryClientProvider>
    </ThemeProvider>
  ),
];
