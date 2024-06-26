import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import { GeofenceProps, MapProps } from './type';
import GeofenceModal from '../GeofenceModal/GeofenceModal';






const Map = ({ geofences = [], zoom = 15,height='50vh',width='50vh', mode = 'view',searchQuery, onGeofenceCreate }: MapProps) => {
    const [searchLocation, setSearchedLocation] = useState<google.maps.LatLngLiteral | null>(null);
    const [currentPolygon, setCurrentPolygon] = useState<google.maps.LatLngLiteral[]>([]);
    const [selectedGeofence, setSelectedGeofence] = useState<GeofenceProps | null>(null);
    const defaultCenter = {
        lat: 21.490499199707944,
        lng: -104.8843527463358
    }

    const mapStyles = {
        height: height,
        width: width,
    }

    useEffect(() => {

        if (searchQuery && searchQuery.geometry && searchQuery.geometry.location) {
            // Convertir la ubicación buscada a LatLngLiteral si es necesario
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
        if (currentPolygon.length > 2 && onGeofenceCreate) {
            const newGeofence: GeofenceProps = {
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
                                mode === 'view' && (
                                    <Marker
                                        position={calculatePolygonCenter(geofence.polygons)}
                                        
                                        
                                        label={{
                                            text: geofence.geofenceName,
                                            color: '#000000',
                                            fontWeight: 'bold',
                                            fontSize: '14px',
                                            className: `geofence-label geofence-label-${geofence.id} p-2 rounded-lg text-center h-[35px] mt-2 `,
                                            
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
                <GeofenceModal
                    geofence={selectedGeofence}
                    onClose={closeModal}
                />
            )}
        </LoadScript>
    );
};

export default Map;
