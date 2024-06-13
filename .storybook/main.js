/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
      },
    },
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: ["./static"]
};



export default config;
