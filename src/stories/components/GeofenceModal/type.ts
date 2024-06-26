import { GeofenceProps } from "../Mapa/type";

export type GeofenceModalProps = {
    geofence: GeofenceProps;
    onClose: () => void;
}