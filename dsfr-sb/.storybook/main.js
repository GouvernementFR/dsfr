/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
  stories: ['../*.mdx', '../../src/dsfr/**/*.mdx', '../../src/dsfr/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/theming',
    '@storybook/addon-themes',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-mdx-gfm',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        actions: false,
        outline: false,
        grid: false,
        viewport: true,
      },
    }
  ],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  staticDirs: ["./static", { from: "../../dist", to: "dist" }, { from: "../../tool/example/img", to: "img" }],

  docs: {}
};

export default config;
