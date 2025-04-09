import { Meta } from "@storybook/react";
import GeofenceModal from "./GeofenceModal";

const meta = {
    title: 'Molecules/GeofenceModal',
    component: GeofenceModal,
    args:{}
} as Meta<typeof GeofenceModal>;

export default meta;

export const Default = {
    args:{
        dynamicRate:{
            "id": "1",
            "name": "Ciudad de Wallavi",
            "ubicationName": "Palacio de bellas artes indigenas",
            "ubicationCoordinates":[{}],
            "initialRate": 48,
            "isDynamic": true,
            "pricePerKilometer": 10,
            "kilometers": 60,
            "priceOnDemand": 10,
            "isDemand": true,
            "startHour": "9:00 PM",
            "endHour": "5:00 AM",
            "color": "#e600fa",
            "priority": 'Principal',
            "polygons": [{
                "lat": 21.49819581004538,
                "lng": -104.88596400671796
            }, {
                "lat": 21.496912570601754,
                "lng": -104.88756887641208
            }, {
                "lat": 21.496609257806565,
                "lng": -104.88962511570769
            }, {
                "lat": 21.487392913692606,
                "lng": -104.88899821348342
            }, {
                "lat": 21.486459580475955,
                "lng": -104.88543740884957
            }, {
                "lat": 21.483986218496636,
                "lng": -104.88032188663402
            }, {
                "lat": 21.484872900260903,
                "lng": -104.8768363102671
            }, {
                "lat": 21.489842884898486,
                "lng": -104.87814026689358
            }, {
                "lat": 21.498195810033664,
                "lng": -104.88588877838556
            }],
            "isActivate": true
        }
    }
};