import { Meta } from "@storybook/react";
import CreatePolygon from "./createpolygon";

const meta = {
    title: "Components/CreatePolygon",
    component:CreatePolygon,
    args:{
    },
} as Meta<typeof CreatePolygon>;

export default meta;

export const Default = {
    args:{
        center:{ lat: 21.4905, lng: -104.88508 },
    }
}