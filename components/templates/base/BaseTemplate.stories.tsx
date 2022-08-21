import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockBaseTemplateProps } from './ BaseTemplate.mocks';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  // More argTypes: https://storybook.js.org/docs/react/api/argTypes
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

//More component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});
//More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate;
