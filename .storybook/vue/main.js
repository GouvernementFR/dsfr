/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: [
    "../../src/**/stories/**/*.vue.mdx",
    "../../src/**/stories/**/*.vue.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
  builder: {
    name: '@storybook/builder-vite',
    options: {
      viteConfigPath: '.storybook/vue/vite.config.js',
    },
  },
},
  docs: {
    autodocs: "tag",
  },
};

export default config;
