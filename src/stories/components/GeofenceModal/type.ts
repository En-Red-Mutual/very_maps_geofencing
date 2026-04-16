import { DynamicRateProps } from "../GeofenceMap/type";

export type GeofenceModalProps = {
  dynamicRate: DynamicRateProps;
  extraContent?: React.ReactNode;
  onClose: () => void;
  onEdit?: () => void;
};
