import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import Switch from '../Switch';
import { IconEdit, IconMapPinFilled, IconX } from '@tabler/icons-react';


export interface Geofence {
    id: number | string;
    geofenceName: string;
    geofenceColor: string;
    geofenceLocation?: string;
    dynamicRateEnabled?: boolean;
    rateForHour?: number;
    onDemandEnabled?: boolean;
    priorityZone?: number;
    initialRate?: number;
    dynamicRateMinPrice?: number;
    dynamicRateMaxDistance?: number;
    on?: boolean;
    polygons: google.maps.LatLngLiteral[];
    schedule?: {
        startHour: number;
        startMinute: number;
        startPeriod: 'AM' | 'PM';
        endHour: number;
        endMinute: number;
        endPeriod: 'AM' | 'PM';
    };
}


interface MapProps {
    geofences?: Geofence[];
    mode?: 'view' | 'edit' | 'new';
    height?: string;
    zoom?: number;
    onGeofenceCreate?: (geofence: Geofence) => void;
}

const Map = ({ geofences = [], zoom = 15, mode = 'view', height = '60vh', onGeofenceCreate }: MapProps) => {
    const [currentPolygon, setCurrentPolygon] = useState<google.maps.LatLngLiteral[]>([]);
    const [selectedGeofence, setSelectedGeofence] = useState<Geofence | null>(null);
    const defaultCenter = {
        lat: 21.490499199707944,
        lng: -104.8843527463358
    }

    const mapStyles = {
        height: height,
        width: '100%',
    }

    useEffect(() => {
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
    }, [geofences]);

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        const noExistingGeofence = geofences.every(geofence => !geofence.polygons || geofence.polygons.length === 0);
        if (mode === 'new' && noExistingGeofence && event.latLng) {
            setCurrentPolygon([...currentPolygon, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
        }
    };

    const handlePolygonComplete = () => {
        if (currentPolygon.length > 2 && onGeofenceCreate) {
            const newGeofence: Geofence = {
                id: `geofence-${Date.now()}`,
                geofenceName: 'New Geofence',
                geofenceColor: '#FF0000',
                polygons: currentPolygon
            };
            onGeofenceCreate(newGeofence);
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

    const handleMarkerClick = (geofence: Geofence) => {
        setSelectedGeofence(geofence);
    };

    const closeModal = () => {
        setSelectedGeofence(null);
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyDFuE_-2cXmeOlWIW3AvirBif1UqvMyn-U'>
            <GoogleMap
                center={defaultCenter}
                zoom={zoom}
                mapContainerClassName='rounded-b-lg focus:outline-none'
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
                            {
                                mode === 'view' && geofences.length > 1 && (
                                    <Marker
                                        position={calculatePolygonCenter(geofence.polygons)}
                                        
                                        
                                        label={{
                                            text: geofence.geofenceName,
                                            color: '#000000',
                                            fontWeight: 'bold',
                                            fontSize: '14px',
                                            className: `geofence-label geofence-label-${geofence.id} p-2 rounded-lg text-center h-[30px] `,
                                            
                                        }}
                                        onClick={() => handleMarkerClick(geofence)}
                                    />
                                )
                            }
                        </React.Fragment>
                    )
                ))}
                {
                    mode === 'new' && currentPolygon.length > 0 && (
                        <Polygon
                            path={currentPolygon}
                            options={{
                                fillColor: '#FF0000',
                                fillOpacity: 0.5,
                                strokeColor: '#FF0000',
                                strokeOpacity: 1,
                                strokeWeight: 4,
                                editable: true,
                            }}
                            onDblClick={handlePolygonComplete}
                        />
                    )
                }
            </GoogleMap>
            {selectedGeofence && (
                <div className='absolute top-1/4 right-[200px] w-[200px] flex flex-col gap-2'>
                    <div className='bg-black text-white rounded-2xl text-center'>
                        <h2 className='font-bold'>Nombre</h2>
                        <p className='text-[13px]'>{selectedGeofence.geofenceName}</p>
                    </div>
                    <div className='flex gap-1 justify-center bg-black text-white text-[13px] rounded-2xl text-center items-center h-[30px]'>
                        <IconMapPinFilled size={22} />
                        <p>{selectedGeofence.geofenceLocation}</p>
                    </div>
                    <div className='bg-black rounded-2xl text-white text-center'>
                        <h2 className='font-bold'>Tarifa inicial</h2>
                        <p className='text-[13px]'>${selectedGeofence.initialRate}.00</p>
                    </div>
                    <div className='bg-black text-white rounded-2xl text-center'>
                        <h2 className='font-bold'>Tarifa dinamica</h2>
                        <p className='text-[13px]'>${selectedGeofence.dynamicRateMinPrice} <span>{'->'}</span> {selectedGeofence.dynamicRateMaxDistance} km</p>
                        <p className='text-[13px]'>$50 MXN - 9PM a 5AM</p>
                    </div>
                    <div className='flex gap-1 justify-between h-[40px]'>
                        <div className='bg-black flex items-center p-1 rounded-[60%]'>
                            <Switch initialOn={selectedGeofence.on || false} />
                        </div>
                        <div className='bg-black p-1 rounded-[50%] flex items-center'>
                            <div style={{ backgroundColor: selectedGeofence.geofenceColor }} className={` w-[30px] h-[30px] rounded-[50%]`} />
                        </div>
                        <button className='bg-black w-[40px] text-white flex items-center justify-center rounded-[50%]'>
                            <IconEdit size={24} />
                        </button>
                        <button className='bg-gray-400/10 w-[40px] rounded-[50%] flex items-center justify-center' onClick={closeModal}><IconX/></button>

                    </div>
                </div>
            )}
        </LoadScript>
    );
};

export default Map;
