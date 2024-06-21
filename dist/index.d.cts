import React from 'react';

interface Geofence {
    id: number | string;
    geofenceName: string;
    geofenceColor: string;
    geofenceLocation?: string;
    dynamicRateEnabled?: boolean;
    rateForHour?: number;
    onDemandEnabled?: boolean;
    priorityZone?: number;
    initialRate?: number;
    dynamicRateMinPrice?: number;
    dynamicRateMaxDistance?: number;
    on?: boolean;
    polygons: google.maps.LatLngLiteral[];
    schedule?: {
        startHour: number;
        startMinute: number;
        startPeriod: 'AM' | 'PM';
        endHour: number;
        endMinute: number;
        endPeriod: 'AM' | 'PM';
    };
}
interface MapProps {
    geofences?: Geofence[];
    mode?: 'view' | 'edit' | 'new';
    height?: string;
    zoom?: number;
    onGeofenceCreate?: (geofence: Geofence) => void;
}
declare const Map: ({ geofences, zoom, mode, height, onGeofenceCreate }: MapProps) => React.JSX.Element;

export { Map };
