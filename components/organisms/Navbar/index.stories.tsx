import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from ".";

export default {
  title: "organisms/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
