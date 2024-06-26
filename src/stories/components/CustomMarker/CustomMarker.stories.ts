import { Meta } from "@storybook/react";
import CustomMarker from "./CustomMarker";

const meta = {
    title: 'Molecules/CustomMarker',
    component: CustomMarker,
    argTypes: {
        onClick: { action: 'click' },
    },
} as Meta<typeof CustomMarker>;

export default meta;

export const Default = {
    args:{
        geofence:{
            geofenceName:'CD DEL VALLE',
            geofenceColor:"#e600fa",
            on: true,
            priorityZone: 4,
        }
    }
};