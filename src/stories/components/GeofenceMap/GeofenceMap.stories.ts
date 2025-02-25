import {Meta} from '@storybook/react';
import GeofenceMap from './GeofenceMap';
const meta = {
    title: "Molecules/Map",
    component:GeofenceMap,
    args:{
    },
} as Meta<typeof GeofenceMap>;

export default meta;

export const Default = {
    args:{
        singlePolygon:{
            color: "violet",
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
            ]
        },
        mode:"view",
        center:{ lat: 21.4905, lng: -104.88508 },
        height: "80vh",
        width:'100vh'
    }
};





export const Empty = {
    args:{
        mode:"new",
        height: "80vh",
        width:'100vh',
        center:{ lat: 21.4905, lng: -104.88508 }
    }
};


export const Edit = {
    args:{
        singlePolygon:{
            color: "red",
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
            ]
        },
        center:{ lat: 21.4905, lng: -104.88508 },
        mode:"edit",
        height: "80vh",
        width:'100vh'
    }
};


export const MultiPolygon = {
    args:{
        dynamicRates:[
            {
                id:'1',
                name:'CD DEL VALLE 1',
                ubicationName: "Ciudad del valle",
                color:"red",
                initialRate: 48,
                isDynamic: true,
                pricePerKilometer: 10,
                kilometer: 60,
                price: 10,
                onDemand: true,
                startHour: "9:00 PM",
                endHour: "5:00 AM",
                priority: 'Principal',
                polygons:[
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
                isactivate:true
            },
            {
            id:'2',
            name:'CD DEL VALLE',
            ubicationName: "Ciudad del valle",
            color:"blue",
            initialRate: 48,
            isDynamic: true,
            pricePerKilometer: 10,
            kilometer: 60,
            price: 10,
            onDemand: true,
            startHour: "9:00 PM",
            endHour: "5:00 AM",
            priority: 'Principal',
            polygons:[
                { lat:21.497125763867142, lng:-104.88508233152875 },
                { lat:21.49449429324603, lng:-104.88248537998959 },
                { lat:21.491349706186508,lng:-104.8828944887937},
                { lat:21.49489149940861, lng:-104.88565152638665 }
            ],
            isactivate:false
        }],
        center:{ lat: 21.4905, lng: -104.88508 },
        mode:"view",
        height: "100vh",
        width: "150vh"
    }
};
