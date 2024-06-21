import React from 'react';
import { Geofence } from './Mapa/Map';

interface GeofenceLabelProps {
    position: google.maps.LatLngLiteral;
    geofence: Geofence;
    onClick: (geofence: Geofence) => void;
}

const GeofenceLabel: React.FC<GeofenceLabelProps> = ({ position, geofence, onClick }) => {
    const labelStyles: React.CSSProperties = {
        position: 'absolute',
        backgroundColor: geofence.geofenceColor,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: '14px',
        padding: '8px',
        borderRadius: '8px',
        cursor: 'pointer',
        zIndex: 1000, // Asegura que el div esté por encima del mapa
        transform: 'translate(-50%, -50%)', // Centra el div
        left: position.lng, // Posición en longitud
        top: position.lat, // Posición en latitud
    };

    return (
        <div
            style={labelStyles}
            onClick={() => onClick(geofence)}
            className={`geofence-label geofence-label-${geofence.geofenceId}`}
        >
            {geofence.geofenceName}
        </div>
    );
};

export default GeofenceLabel;
