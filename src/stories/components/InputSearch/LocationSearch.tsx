import React, { useState, useRef } from 'react';
import { Autocomplete, LoadScript } from '@react-google-maps/api';
import { LocationSearchProps } from './type';

const LocationSearch = ({ onPlaceSelect }: LocationSearchProps) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
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
                    className='border border-gray-300 rounded-md p-2 focus:outline-none'
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </Autocomplete>
        </LoadScript>
    );
};

export default LocationSearch;