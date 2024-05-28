/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../../src/**/stories/**/*.html.mdx",
    "../../src/**/stories/**/*.html.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {},
};
export default config;
