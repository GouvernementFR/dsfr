/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
  stories: [
    "../../src/**/stories/**/*.react.mdx",
    "../../src/**/stories/**/*.react.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  }
};
export default config;
