export interface PlaceDetails {
  name: string;
  lat: number;
  lng: number;
}

export type InputSearchProps = {
  value?: string;
  onSelectLocation?: (place: PlaceDetails) => void;
  CSS:[];
  isLoaded: boolean;
}