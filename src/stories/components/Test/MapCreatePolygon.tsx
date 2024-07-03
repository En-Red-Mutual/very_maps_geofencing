import React, { useEffect, useState } from 'react';
import Map from '../Mapa/Map';
import LocationSearch from '../InputSearch/LocationSearch';

const MapCreatePolygon = () => {
    const [paths, setPaths] = useState<google.maps.LatLngLiteral[]>([]);
    const [createdPolygon, setCreatedPolygon] = useState<google.maps.LatLngLiteral[]>([]);
    const [searchQuery,setSearchQuery] = React.useState<google.maps.places.PlaceResult | null >(null);
    const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
        setSearchQuery(place);
    }

    const onPolygonCreated = (newPaths: google.maps.LatLngLiteral[]) => {
        console.log("Nuevo polígono creado:", newPaths);
        setPaths(newPaths);
        setCreatedPolygon(newPaths);
    };

    useEffect(() => {
        console.log("Polígono actual:", paths);
    }, [paths]);

    return (
        <div className="flex items-center p-4 space-y-4">
            <div className='w-[500px]'>
                <LocationSearch onPlaceSelect={handlePlaceSelect} otherStyles='border border-gray-300'/>
                <div className="w-full h-[70vh] rounded-lg shadow-lg overflow-hidden relative">
                    <Map 
                        onPolygonComplete={onPolygonCreated} 
                        mode='new' 
                        width='100%' 
                        height='100%' 
                        createdPolygon={createdPolygon}
                        searchQuery={searchQuery}
                    />
                </div>
            </div>
            {paths.length > 0 && (
                <div className=" p-4 bg-white rounded-lg shadow-lg w-[500px]">
                    <h3 className="text-xl font-semibold mb-4 text-center">Polígono creado</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                        {JSON.stringify(paths, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default MapCreatePolygon;
