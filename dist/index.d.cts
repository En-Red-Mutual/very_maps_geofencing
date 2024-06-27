import React from 'react';

type GeofenceProps = {
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
};
type MapProps = {
    geofences?: GeofenceProps[];
    mode?: 'view' | 'edit' | 'new';
    height?: string;
    width?: string;
    zoom?: number;
    searchQuery?: google.maps.places.PlaceResult | null;
    onPolygonComplete?: (polygons: google.maps.LatLngLiteral[]) => void;
};

declare const Map: ({ geofences, zoom, height, width, mode, searchQuery, onPolygonComplete }: MapProps) => React.JSX.Element;

type GeofenceModalProps = {
    geofence: GeofenceProps;
    onClose: () => void;
};

declare const GeofenceModal: ({ geofence, onClose }: GeofenceModalProps) => React.JSX.Element;

type LocationSearchProps = {
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
};

declare const LocationSearch: ({ onPlaceSelect }: LocationSearchProps) => React.JSX.Element;

declare const Switch: ({ initialOn, onToggle }: {
    initialOn: boolean;
    onToggle?: (isOn: boolean) => void;
}) => React.JSX.Element;

export { GeofenceModal, type GeofenceModalProps, type GeofenceProps, LocationSearch, type LocationSearchProps, Map, type MapProps, Switch };
