import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
      "../../../src/**/*.ng.mdx",
      "../../../src/**/*.ng.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
};
export default config;
