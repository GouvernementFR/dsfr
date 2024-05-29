import type { Meta, StoryObj } from '@storybook/angular';
import { FrIconComponent } from '../component/ng/fr-icon.component';
import { FrIconModel } from '../component/model/fr-icon-model';
import { schemaToArgs, schemaToArgTypes } from '@gouvfr/dsfr-kit';

const meta: Meta<FrIconComponent> = {
  title: 'Core/FrIcon',
  tags: ['autodocs'],
  component: FrIconComponent,
  argTypes: schemaToArgTypes(FrIconModel.schema),
  args: schemaToArgs(FrIconModel.schema)
};

export default meta;
type Story = StoryObj<FrIconComponent>;

export const warning: Story = {
  args: {
    id: 'warning-icon',
    name: 'warning-fill'
  },
};
// export { warning, warningSm, warningLg } from './stories.js';
