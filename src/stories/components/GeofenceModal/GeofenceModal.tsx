import React from "react";
import { IconMapPinFilled, IconPencil, IconX } from "@tabler/icons-react";
import { GeofenceModalProps } from "./type";
import "./styles.css";

const GeofenceModal = ({
  dynamicRate,
  onClose,
  extraContent,
}: GeofenceModalProps) => {
  const formatHour = (time: string) => {
    const [hour, , period] = time.split(/[:\s]/);
    return `${hour} ${period}`;
  };

  return (
    <article className="geofence-modal">
      <div className="geofence-section">
        <span className="font-bold">Nombre</span>
        <p className="truncate">{dynamicRate.name}</p>
      </div>
      <div className="geofence-section-row">
        <IconMapPinFilled size={22} />
        <p className="geofence-ubication">{dynamicRate.ubicationName}</p>
      </div>
      <div className="geofence-section">
        <span className="font-bold">Tarifa inicial</span>
        <p>${dynamicRate.initialRate} MXN km</p>
      </div>
      <div className="geofence-section">
        <span>Tarifa dinámica</span>
        <p>
          ${dynamicRate.pricePerKilometer} MXN <span>{"->"}</span>{" "}
          {dynamicRate.kilometers} km
        </p>
        <p>
          ${dynamicRate.priceOnDemand} MXN - {formatHour(dynamicRate.startHour)}{" "}
          a {formatHour(dynamicRate.endHour)}
        </p>
      </div>
      <div className="geofence-footer">
        <div className="geofence-extra-content">{extraContent}</div>
        <div className="geofence-color-circle">
          <div
            className="geofence-color-box"
            style={{ backgroundColor: dynamicRate.color }}
          />
        </div>
        <button className="geofence-button-edit">
          <IconPencil size={24} />
        </button>
        <button className="geofence-button-close" onClick={onClose}>
          <IconX />
        </button>
      </div>
    </article>
  );
};

export default GeofenceModal;
