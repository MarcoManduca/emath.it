import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockLayoutPrimaryProps } from './ LayoutPrimary.mocks';
import LayoutPrimary, { ILayoutPrimary } from './LayoutPrimary';

export default {
  title: 'templates/LayoutPrimary',
  component: LayoutPrimary,
  argTypes: {},
} as ComponentMeta<typeof LayoutPrimary>;

const Template: ComponentStory<typeof LayoutPrimary> = (args) => (
  <LayoutPrimary {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockLayoutPrimaryProps.base,
} as ILayoutPrimary;
