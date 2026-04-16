export type DynamicRateProps = {
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
export type PolygonSingle = {
  color: string;
  polygons: google.maps.LatLngLiteral[];
};

export type MapProps = {
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
