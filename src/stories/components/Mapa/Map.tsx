import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import { GeofenceProps, MapProps } from './type';
import { IconEdit, IconMapPinFilled, IconX } from '@tabler/icons-react';
import Switch from '../Switch/Switch';

const Map = ({ geofences = [], zoom = 15, height = '50vh', width = '50vh', mode = 'view', searchQuery, onPolygonComplete }: MapProps) => {
    const [searchLocation, setSearchedLocation] = useState<google.maps.LatLngLiteral | null>(null);
    const [currentPolygon, setCurrentPolygon] = useState<google.maps.LatLngLiteral[]>([]);
    const [selectedGeofence, setSelectedGeofence] = useState<GeofenceProps | null>(null);
    const defaultCenter = {
        lat: 21.490499199707944,
        lng: -104.8843527463358
    };

    const mapStyles = {
        height: height,
        width: width,
    };

    useEffect(() => {
        if (searchQuery && searchQuery.geometry && searchQuery.geometry.location) {
            const locationLatLng: google.maps.LatLngLiteral = {
                lat: searchQuery.geometry.location.lat(),
                lng: searchQuery.geometry.location.lng(),
            };
            setSearchedLocation(locationLatLng);
        }

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        geofences.forEach(geofence => {
            const className = `geofence-label-${geofence.id}`;
            const styles = `
                .${className} {
                    background-color: ${geofence.geofenceColor};
                }
            `;
            styleSheet.innerText += styles;
        });
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet);
        };
    }, [geofences, searchQuery]);

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        const noExistingGeofence = geofences.every(geofence => !geofence.polygons || geofence.polygons.length === 0);
        if (mode === 'new' && noExistingGeofence && event.latLng) {
            setCurrentPolygon([...currentPolygon, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
        }
    };

    const handlePolygonComplete = () => {
        if (currentPolygon.length > 2 && onPolygonComplete) {
            onPolygonComplete(currentPolygon);
            setCurrentPolygon([]);
        }
    };

    const calculatePolygonCenter = (polygons: google.maps.LatLngLiteral[]): google.maps.LatLngLiteral => {
        let lat = 0, lng = 0;
        polygons.forEach(point => {
            lat += point.lat;
            lng += point.lng;
        });
        return {
            lat: lat / polygons.length,
            lng: lng / polygons.length
        };
    };

    const handleMarkerClick = (geofence: GeofenceProps) => {
        setSelectedGeofence(geofence);
    };

    const closeModal = () => {
        setSelectedGeofence(null);
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyDFuE_-2cXmeOlWIW3AvirBif1UqvMyn-U' libraries={['places']}>
            <GoogleMap
                center={searchLocation || defaultCenter}
                zoom={zoom}
                mapContainerClassName='rounded-b-lg focus:outline-none relative'
                mapContainerStyle={mapStyles}
                onClick={handleMapClick}
                options={{
                    zoomControl: true,
                    controlSize: 20,
                }}
            >
                {geofences.map((geofence) => (
                    geofence.polygons && geofence.polygons.length > 0 && (
                        <React.Fragment key={geofence.id}>
                            <Polygon
                                path={geofence.polygons}
                                options={{
                                    fillColor: geofence.geofenceColor,
                                    fillOpacity: mode === 'view' ? 0.2 : 0.5,
                                    strokeColor: geofence.geofenceColor,
                                    strokeOpacity: 1,
                                    strokeWeight: 4,
                                    editable: mode === 'edit',
                                }}
                            />
                            {mode === 'view' && (
                                <Marker
                                    position={calculatePolygonCenter(geofence.polygons)}
                                    label={{
                                        text: geofence.geofenceName,
                                        color: '#ffffff',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                        className: `geofence-label geofence-label-${geofence.id} p-2 rounded-lg text-center h-[35px] mt-2`,
                                    }}
                                    onClick={() => handleMarkerClick(geofence)}
                                />
                            )}
                            {selectedGeofence && selectedGeofence.id === geofence.id && (
                                <div className='absolute right-8 top-[20px]'>
                                    <article className='w-[200px] flex flex-col gap-2'>
                                        <div className='bg-black text-white rounded-[5rem] text-center py-2'>
                                            <h2 className='font-bold text-[13px]'>Nombre</h2>
                                            <p className='text-[12px]'>{geofence.geofenceName}</p>
                                        </div>
                                        <div className='flex gap-4 py-1 justify-center bg-black text-white text-[13px] rounded-2xl text-center items-center'>
                                            <IconMapPinFilled size={22} />
                                            <p className='text-[14px]'>{geofence.geofenceLocation}</p>
                                        </div>
                                        <div className='bg-black rounded-2xl py-2 text-white text-center'>
                                            <h2 className='font-bold text-[13px]'>Tarifa inicial</h2>
                                            <p className='text-[12px]'>${geofence.initialRate} MXN km</p>
                                        </div>
                                        <div className='bg-black py-2 text-white rounded-[1.5rem] text-center flex flex-col gap-1 '>
                                            <h2 className='font-bold text-[13px]'>Tarifa dinamica</h2>
                                            <p className='text-[12px]'>${geofence.dynamicRateMinPrice} MXN <span>{'->'}</span> {geofence.dynamicRateMaxDistance} km</p>
                                            <p className='text-[12px]'>$50 MXN - 9PM a 5AM</p>
                                        </div>
                                        <div className='flex gap-1 justify-between h-[40px] w-full'>
                                            <div className='bg-black flex items-center justify-center w-[60px] rounded-[50px]'>
                                                <Switch initialOn={geofence.on || false} />
                                            </div>
                                            <div className='bg-black p-1 rounded-[50%] flex items-center'>
                                                <div style={{ backgroundColor: geofence.geofenceColor }} className={`w-[30px] h-[30px] rounded-[50%]`} />
                                            </div>
                                            <button className='bg-black w-[40px] text-white flex items-center justify-center rounded-[50%]'>
                                                <IconEdit size={24} />
                                            </button>
                                            <button className='bg-gray-900/60 w-[40px] rounded-[50%] flex items-center justify-center text-white' onClick={closeModal}><IconX /></button>
                                        </div>
                                    </article>
                                </div>
                            )}
                        </React.Fragment>
                    )
                ))}
                {mode === 'new' && (
                    <Polygon
                        path={currentPolygon}
                        options={{
                            fillColor: '#F39C12',
                            fillOpacity: 0.5,
                            strokeColor: '#F39C12',
                            strokeOpacity: 1,
                            strokeWeight: 4,
                            editable: true,
                        }}
                        onDblClick={handlePolygonComplete}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
