import React$1 from 'react';

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
    priority: "principal" | "secundario" | "terciario" | "ninguno";
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
    mode?: "view" | "edit" | "new" | "preview";
    height?: string;
    width?: string;
    zoom?: number;
    center?: google.maps.LatLngLiteral;
    defaultCenter?: google.maps.LatLngLiteral;
    onPolygonComplete?: (polygons: google.maps.LatLngLiteral[]) => void;
    onPolygonUpdate?: (polygons: google.maps.LatLngLiteral[]) => void;
    createdPolygon?: google.maps.LatLngLiteral[];
    drawingPoints?: google.maps.LatLngLiteral[];
    onMapClick?: (point: google.maps.LatLngLiteral) => void;
    onEditGeofence?: (rate: DynamicRateProps) => void;
    isLoaded?: boolean;
    linkEdit?: string;
};

type GeofenceModalProps = {
    dynamicRate: DynamicRateProps;
    extraContent?: React.ReactNode;
    onClose: () => void;
    onEdit?: () => void;
};

declare const GeofenceModal: ({ dynamicRate, onClose, extraContent, onEdit, }: GeofenceModalProps) => React$1.JSX.Element;

declare function GeofenceMap({ dynamicRates, mode, singlePolygon, center, onPolygonUpdate, onPolygonComplete, createdPolygon, drawingPoints, onMapClick, onEditGeofence, height, width, zoom, isLoaded, }: MapProps): React$1.JSX.Element;

type ColorPickerProps = {
    valueColor: string;
    colors?: {
        name: string;
        color: string;
    }[];
    onChangeColor: (color: string) => void;
};

declare const ColorPicker: ({ valueColor, onChangeColor, colors, }: ColorPickerProps) => React$1.JSX.Element;

interface PlaceDetails {
    name: string;
    lat: number;
    lng: number;
}
type InputSearchProps = {
    value?: string;
    onSelectLocation?: (place: PlaceDetails) => void;
    CSS: [];
    isLoaded: boolean;
};

declare const InputSearch: React$1.FC<InputSearchProps>;

export { ColorPicker, type ColorPickerProps, type DynamicRateProps, GeofenceMap, GeofenceModal, type GeofenceModalProps, InputSearch, type InputSearchProps, type MapProps, type PlaceDetails };
