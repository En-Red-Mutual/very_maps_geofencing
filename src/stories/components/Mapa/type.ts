export type GeofenceProps = {
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


export type MapProps  = {
    geofences?: GeofenceProps[];
    mode?: 'view' | 'edit' | 'new';
    height?: string;
    width?: string;
    zoom?: number;
    searchQuery?: google.maps.places.PlaceResult | null;
    onPolygonComplete?: (polygons: google.maps.LatLngLiteral[]) => void;
    createdPolygon?: google.maps.LatLngLiteral[];
}