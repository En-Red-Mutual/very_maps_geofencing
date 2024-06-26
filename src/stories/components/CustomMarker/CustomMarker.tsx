import React from 'react';
import { GeofenceProps } from '../Mapa/type';
import { IconStack } from '@tabler/icons-react';

interface CustomMarkerProps {
    geofence: GeofenceProps;
    onClick: (geofence: GeofenceProps) => void;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ geofence, onClick }) => {
    const handleClick = () => {
        onClick(geofence);
    };

    return (
        <div style={{backgroundColor:`${geofence.geofenceColor}`,width:'150px'}} className={`flex gap-2 text-white p-1 rounded-lg`} onClick={handleClick}>
            {
                geofence.priorityZone === 4 || !geofence.priorityZone ? (
                    <IconStack/>
                ):null
            }
            <p>{geofence.geofenceName}</p>
        </div>
    );
};

export default CustomMarker;
