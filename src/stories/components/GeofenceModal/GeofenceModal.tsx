import React from "react";
import { IconMapPinFilled, IconX, IconPencil } from "@tabler/icons-react";
import { GeofenceModalProps } from "./type";
import "./styles.css";

const GeofenceModal = ({
  dynamicRate,
  onClose,
  extraContent,
  onEdit,
}: GeofenceModalProps) => {
  const formatHour = (time: string) => {
    if (!time) return "--";
    const [hour, , period] = time.split(/[:\s]/);
    return `${hour} ${period}`;
  };

  return (
    <article className="geofence-modal">
      <div className="geofence-section">
        <div className="geofence-name-row">
          <span className="font-bold truncate">{dynamicRate.name}</span>
          {dynamicRate.isActivate !== undefined && (
            <span
              className={
                dynamicRate.isActivate
                  ? "geofence-badge-active"
                  : "geofence-badge-inactive"
              }
            >
              {dynamicRate.isActivate ? "Activa" : "Inactiva"}
            </span>
          )}
        </div>
      </div>
      <div className="geofence-section-row">
        <IconMapPinFilled size={18} />
        <p className="geofence-ubication">{dynamicRate.ubicationName}</p>
      </div>
      <div className="geofence-section">
        <span className="font-bold">Tarifa base</span>
        <p>
          ${dynamicRate.initialRate} MXN —{" "}
          <span className="geofence-muted">
            primeros {dynamicRate.kilometers} km
          </span>
        </p>
      </div>
      {dynamicRate.isDynamic && (
        <div className="geofence-section">
          <span>Por km adicional</span>
          <p>${dynamicRate.pricePerKilometer} MXN / km</p>
          {dynamicRate.isDemand && (
            <p className="geofence-muted">
              +${dynamicRate.priceOnDemand} MXN ·{" "}
              {formatHour(dynamicRate.startHour)} a{" "}
              {formatHour(dynamicRate.endHour)}
            </p>
          )}
        </div>
      )}
      <div className="geofence-footer">
        {extraContent && (
          <div className="geofence-extra-content">{extraContent}</div>
        )}
        <div className="geofence-color-circle">
          <div
            className="geofence-color-box"
            style={{ backgroundColor: dynamicRate.color }}
          />
        </div>
        {onEdit && (
          <button
            className="geofence-button-edit"
            onClick={onEdit}
            title="Ir a editar"
          >
            <IconPencil size={16} />
          </button>
        )}
        <button className="geofence-button-close" onClick={onClose}>
          <IconX size={18} />
        </button>
      </div>
    </article>
  );
};

export default GeofenceModal;
