import { Meta } from "@storybook/react";
import Switch from "./Switch";

const meta = {
    title: 'Molecules/Switch',
    component: Switch,
    argTypes: {
        onChange: { action: 'change' },
    },
} as Meta<typeof Switch>;

export default meta;

export const Default = {
    args: {
        initialOn: true
    }
};