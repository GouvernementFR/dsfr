/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/theming',
    '@storybook/addon-themes',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        outline: false,
        grid: false,
        viewport: true,
      },
    },
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: ["./static", { from: "../../dist", to: "dist" }, { from: "../../tool/example/img", to: "img" }],
};

export default config;
