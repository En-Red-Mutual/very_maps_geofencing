import { Meta, StoryObj } from "@storybook/react";
import ListaPage from "./ListaPage";

const meta: Meta<typeof ListaPage> = {
    title: "Components/ListaPage/ListaPage",
    component: ListaPage,
    argTypes: {
        // Puedes definir argTypes si necesitas personalizar los controles en Storybook
        // geofences: {
        //     control: 'object',
        //     description: 'Array of geofences',
        // }
    },
    args:{}
};

export default meta;

type Story = StoryObj<typeof ListaPage>;

export const Default: Story = {
    args: {
        center : { lat: 21.4905, lng: -104.88508 },
        dynamicRates: [
            {
                id: 1,
                name: "Ciudad del Valle",
                ubicationName: "Ciudad del valle",
                ubicationCoordinates: { lat: 21.49819581004538, lng: -104.88596400671796 },
                initialRate: 10,
                isDynamic: true,
                pricePerKilometer: 5,
                kilometers: 10,
                priceOnDemand: 15,
                isDemand: false,
                color: "#FF7456",
                priority: 'Principal',
                isActivate: false,
                polygons: [
                    { lat: 21.49819581004538, lng: -104.88596400671796 },
                    { lat: 21.496912570601754, lng: -104.88756887641208 },
                    { lat: 21.496609257806565, lng: -104.88962511570769 },
                    { lat: 21.487392913692606, lng: -104.88899821348342 },
                    { lat: 21.486459580475955, lng: -104.88543740884957 },
                    { lat: 21.483986218496636, lng: -104.88032188663402 },
                    { lat: 21.484872900260903, lng: -104.8768363102671 },
                    { lat: 21.489842884898486, lng: -104.87814026689358 },
                    { lat: 21.498195810033664, lng: -104.88588877838556 }
                ],
                startHour: "11:00 AM",
                endHour: "11:59 PM",
            },
            {
                id: 2,
                name: "Geofence 2",
                ubicationName: "Location 2",
                ubicationCoordinates: { lat: 21.497125763867142, lng: -104.88508233152875 },
                initialRate: 8,
                isDynamic: false,
                pricePerKilometer: 0,
                kilometers: 0,
                priceOnDemand: 12,
                isDemand: true,
                color: "#06FFFB",
                priority: 'Secundario',
                isActivate: true,
                polygons: [
                    { lat: 21.497125763867142, lng: -104.88508233152875 },
                    { lat: 21.49449429324603, lng: -104.88248537998959 },
                    { lat: 21.491349706186508, lng: -104.8828944887937 },
                    { lat: 21.49489149940861, lng: -104.88565152638665 }
                ],
                startHour: "11:00 AM",
                endHour: "11:59 PM",
            },
            {
                id: 3,
                name: "Geofence 3",
                ubicationName: "Location 3",
                ubicationCoordinates: { lat: 21.498779486892904, lng: -104.8971815532497 },
                initialRate: 12,
                isDynamic: true,
                pricePerKilometer: 5,
                kilometers: 15,
                priceOnDemand: 18,
                isDemand: false,
                color: "#EA75FF",
                priority: 'Terciario',
                isActivate: false,
                polygons: [
                    { lat: 21.498779486892904, lng: -104.8971815532497 },
                    { lat: 21.49692933237493, lng: -104.89296354155515 },
                    { lat: 21.49387372263675, lng: -104.89477126085282 },
                    { lat: 21.493565354786334, lng: -104.8960969216711 }
                ],
                startHour: "11:00 AM",
                endHour: "11:59 PM",
            },
            
        ]
    }
};
