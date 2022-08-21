import { ComponentMeta, ComponentStory } from '@storybook/react';
import MathematiciansCard, { IMathematiciansCard } from './MathematiciansCard';
import { mockMathematiciansCardProps } from './MathematiciansCard.mocks';

export default {
  title: 'cards/MathematiciansCard',
  component: MathematiciansCard,
  argTypes: {},
} as ComponentMeta<typeof MathematiciansCard>;

const Template: ComponentStory<typeof MathematiciansCard> = (args) => (
  <MathematiciansCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMathematiciansCardProps.base,
} as IMathematiciansCard;
