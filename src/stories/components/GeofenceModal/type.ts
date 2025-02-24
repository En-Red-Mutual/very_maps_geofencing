import { DynamicRateProps } from "../GeofenceMap/type";

export type GeofenceModalProps = {
    dynamicRate: DynamicRateProps;
    onClose: () => void;
}