import React, { useState, useRef, useEffect } from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';
import { LocationSearchProps } from './type';

const LocationSearch = ({ onPlaceSelect, otherStyles, value }: LocationSearchProps) => {
    const [searchInput, setSearchInput] = useState<string>(value || '');
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        setSearchInput(value || '');
    }, [value]);

    const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
        if (place && place.formatted_address) {
            setSearchInput(place.name || place.formatted_address);
        }
        onPlaceSelect(place);
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyDFuE_-2cXmeOlWIW3AvirBif1UqvMyn-U' libraries={['places']}>
            <Autocomplete
                onLoad={(autocomplete) => {
                    autocompleteRef.current = autocomplete;
                    console.log('Autocomplete loaded:', autocomplete);
                }}
                onPlaceChanged={() => {
                    if (autocompleteRef.current) {
                        const place = autocompleteRef.current.getPlace();
                        handlePlaceSelect(place);
                    }
                }}
            >
                <input
                    type="text"
                    placeholder="Search for a place"
                    value={searchInput}
                    className={`rounded-md p-2 focus:outline-none ${otherStyles}`}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </Autocomplete>
        </LoadScript>
    );
};

export default LocationSearch;
