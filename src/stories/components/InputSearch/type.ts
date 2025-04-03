export interface PlaceDetails {
  name: string;
  lat: number;
  lng: number;
}

export interface InputSearchProps {
  value?: string;
  onSelectLocation?: (place: PlaceDetails) => void;
  CSS:[]
}