import React from 'react';

type LocationSearchProps = {
    otherStyles?: string;
    value?: string;
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
};

declare const LocationSearch: ({ onPlaceSelect, otherStyles, value, }: LocationSearchProps) => React.JSX.Element;

declare const Switch: ({ initialOn, onToggle }: {
    initialOn: boolean;
    onToggle?: (isOn: boolean) => void;
}) => React.JSX.Element;

type DynamicRateProps = {
    id: number | string;
    name: string;
    ubicationName: string;
    ubicationCoordinates: google.maps.LatLngLiteral;
    initialRate: number;
    isDynamic: boolean;
    pricePerKilometer: number;
    kilometers: number;
    startHour: string;
    endHour: string;
    priceOnDemand: number;
    isDemand: boolean;
    color: string;
    priority: 'Principal' | 'Secundario' | 'Terciario';
    polygons?: google.maps.LatLngLiteral[];
    isActivate?: boolean;
};
type PolygonSingle = {
    color: string;
    polygons: google.maps.LatLngLiteral[];
};
type MapProps = {
    dynamicRates?: DynamicRateProps[];
    singlePolygon?: PolygonSingle;
    mode?: 'view' | 'edit' | 'new' | 'preview';
    height?: string;
    width?: string;
    zoom?: number;
    center?: google.maps.LatLngLiteral;
    onPolygonComplete?: (polygons: google.maps.LatLngLiteral[]) => void;
    onPolygonUpdate?: (polygons: google.maps.LatLngLiteral[]) => void;
    createdPolygon?: google.maps.LatLngLiteral[];
    linkEdit?: string;
};

type GeofenceModalProps = {
    dynamicRate: DynamicRateProps;
    onClose: () => void;
};

declare const GeofenceModal: ({ dynamicRate, onClose }: GeofenceModalProps) => React.JSX.Element;

declare function GeofenceMap({ dynamicRates, mode, singlePolygon, center, onPolygonUpdate, onPolygonComplete, createdPolygon, height, width, zoom, }: MapProps): React.JSX.Element;

export { type DynamicRateProps, GeofenceMap, GeofenceModal, type GeofenceModalProps, LocationSearch, type LocationSearchProps, type MapProps, Switch };
