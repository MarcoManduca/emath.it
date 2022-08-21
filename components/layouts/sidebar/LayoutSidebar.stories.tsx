import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockLayoutSidebarProps } from './ LayoutSidebar.mocks';
import LayoutSidebar, { ILayoutSidebar } from './LayoutSidebar';

export default {
  title: 'templates/LayoutSidebar',
  component: LayoutSidebar,
  argTypes: {},
} as ComponentMeta<typeof LayoutSidebar>;

const Template: ComponentStory<typeof LayoutSidebar> = (args) => (
  <LayoutSidebar {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockLayoutSidebarProps.base,
} as ILayoutSidebar;
