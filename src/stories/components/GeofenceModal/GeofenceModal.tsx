import React from "react";
import { IconMapPinFilled, IconPencil, IconX } from "@tabler/icons-react";
import { GeofenceModalProps } from "./type";

const GeofenceModal = ({
  dynamicRate,
  onClose,
  extraContent,
}: GeofenceModalProps) => {
  const formatHour = (time: string) => {
    const [hour, , period] = time.split(/[:\s]/); // Separa la hora y el AM/PM
    return `${hour} ${period}`; // Retorna solo la hora y el AM/PM
  };
  return (
    <article className="flex flex-col gap-2 w-[230px] text-sm">
      <div className="bg-black text-white rounded-3xl py-2 flex flex-col gap-2 px-4 items-center justify-center">
        <h2 className="font-bold">Nombre</h2>
        <p className="truncate">{dynamicRate.name}</p>
      </div>
      <div className=" bg-black text-white rounded-3xl py-2 flex gap-2 items-center justify-center">
        <IconMapPinFilled size={22} />
        <p className=" w-[140px] truncate">{dynamicRate.ubicationName}</p>
      </div>
      <div className="bg-black text-white rounded-3xl py-2 flex flex-col gap-2 items-center justify-center">
        <h2 className="font-bold">Tarifa inicial</h2>
        <p>${dynamicRate.initialRate} MXN km</p>
      </div>
      <div className="bg-black text-white rounded-3xl py-2 flex flex-col gap-2 items-center justify-center">
        <h2>Tarifa dinámica</h2>
        <p>
          ${dynamicRate.pricePerKilometer} MXN <span>{"->"}</span>{" "}
          {dynamicRate.kilometers} km
        </p>
        <p>
          ${dynamicRate.priceOnDemand} MXN - {formatHour(dynamicRate.startHour)}{" "}
          a {formatHour(dynamicRate.endHour)}
        </p>
      </div>
      <div className="flex gap-2 items-center justify-around">
        <div className="bg-black w-14 h-8 rounded-2xl">{extraContent}</div>
        <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center">
          <div
            className="w-6 h-6 !p-1 rounded-full"
            style={{
              backgroundColor: dynamicRate.color,
            }}
          />
        </div>
        <button className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white">
          <IconPencil size={24} />
        </button>
        <button
          className="bg-black/20 w-8 h-8 rounded-full flex items-center justify-center text-white"
          onClick={onClose}
        >
          <IconX />
        </button>
      </div>
    </article>
  );
};

export default GeofenceModal;
