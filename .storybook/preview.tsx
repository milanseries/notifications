import type { Preview } from "@storybook/react";
import React from "react";

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

export const decorators = [(story) => <QueryClientProvider client={queryCache}>{story()}</QueryClientProvider>];
