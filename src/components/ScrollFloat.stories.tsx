import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { videos } from './fakeData';

import { ScrollFloat } from './ScrollFloat';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ScrollFloat',
  component: ScrollFloat,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ScrollFloat>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ScrollFloat> = (args) => (
  <ScrollFloat {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: videos,
  itemContent: (index) => {
    const item = videos[index];
    return (
      <div style={{ height: 70, padding: 0, margin: 0 }}>
        <h2 style={{ padding: 0, margin: 0 }}>{item.name}</h2>
        <p style={{ padding: 0, margin: 0 }}>{item.description}</p>
      </div>
    );
  },
};
