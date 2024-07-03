import { Meta } from "@storybook/react";
import MapCreatePolygon from "./MapCreatePolygon";

const meta = {
    title: 'Test/MapCreatePolygon',
    component: MapCreatePolygon,
    argTypes: {
        onPolygonCreated: { action: 'polygonCreated' },
    },
} as Meta<typeof MapCreatePolygon>;

export default meta;

export const Default = {};
