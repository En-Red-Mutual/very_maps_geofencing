export type LocationSearchProps = {
    otherStyles?: string;
    value?: string;
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}
