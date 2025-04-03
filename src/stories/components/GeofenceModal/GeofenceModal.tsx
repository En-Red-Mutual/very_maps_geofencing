import React from "react";
import { IconEdit, IconMapPinFilled, IconX } from "@tabler/icons-react";
import { GeofenceModalProps } from "./type";

const GeofenceModal = ({ dynamicRate, onClose }: GeofenceModalProps) => {
  return (
    <article
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "84px",
          textAlign: "center",
          padding: "1px",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "13px" }}>Nombre</h2>
        <p style={{ fontSize: "12px" }}>{dynamicRate.name}</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "4px",
          padding: "3px 0px",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          fontSize: "13px",
          borderRadius: "84px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <IconMapPinFilled size={22} />
        <p style={{ fontSize: "14px" }}>{dynamicRate.ubicationName}</p>
      </div>
      <div
        style={{
          backgroundColor: "black",
          borderRadius: "2rem",
          padding: "1px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "13px" }}>Tarifa inicial</h2>
        <p style={{ fontSize: "12px" }}>${dynamicRate.initialRate} MXN km</p>
      </div>
      <div
        style={{
          backgroundColor: "black",
          borderRadius: "2rem",
          padding: "1px",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1px",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "13px" }}>
          Tarifa dinámica
        </h2>
        <p style={{ fontSize: "12px" }}>
          ${dynamicRate.pricePerKilometer} MXN <span>{"->"}</span>{" "}
          {dynamicRate.kilometers} km
        </p>
        <p style={{ fontSize: "12px" }}>$50 MXN - 9PM a 5AM</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1px",
          justifyContent: "space-between",
          height: "40px",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            borderRadius: "50px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            borderRadius: "50px",
            padding: "4px",
          }}
        >
          <div
            style={{
              backgroundColor: dynamicRate.color,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          />
        </div>
        <button
          style={{
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            borderRadius: "50px",
            color: "white",
          }}
        >
          <IconEdit size={24} />
        </button>
        <button
          style={{
            backgroundColor: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            borderRadius: "50px",
            color: "white",
          }}
          onClick={onClose}
        >
          <IconX />
        </button>
      </div>
    </article>
  );
};

export default GeofenceModal;
