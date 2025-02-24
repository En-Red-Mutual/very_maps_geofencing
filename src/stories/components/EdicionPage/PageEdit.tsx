import {
  IconChevronLeft,
  IconCoinFilled,
  IconCurrentLocation,
  IconInfoCircle,
  IconMapPinFilled,
  IconMapPins,
  IconStack2,
  IconTimeline,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Switch from "../Switch/Switch";
import LocationSearch from "../InputSearch/LocationSearch";
import { DynamicRateProps } from "../Mapa/type";
import GeofenceMap from "../Mapa/Map";

interface PageEditProps {
  dynamicRate?: DynamicRateProps;
  center: google.maps.LatLngLiteral;
  width: string;
  height: string;
  zoom: number;
  onSave: () => void;
  onToggleDynamicRate: (enabled: boolean) => void;
  onToggleOnDemand: (enabled: boolean) => void;
  onChangeColor: (color: string) => void;
}

const PageEdit: React.FC<PageEditProps> = ({
  dynamicRate,
  center,
  onToggleDynamicRate,
  onToggleOnDemand,
  onChangeColor,
  width,
  height,
  zoom,
}) => {
  const [selectedDynamicRate, setSelectedDynamicRate] =
    useState<DynamicRateProps | null>(dynamicRate || null);
  const [selectedColor, setSelectedColor] = useState<string>(
    selectedDynamicRate?.color || "#000000"
  );
  const [isDynamicRateChecked, setIsDynamicRateChecked] = useState(false);
  const [isOnDemandChecked, setIsOnDemandChecked] = useState(false);
  const [mode, setMode] = useState<"view" | "edit" | "new">("view");
  const [newPaths, setNewPaths] = useState<google.maps.LatLngLiteral[]>([]);

  const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(
    null
  );

  useEffect(() => {
    if (selectedDynamicRate) {
      loadGeofence(selectedDynamicRate);
    }
  }, [selectedColor]);

  const loadGeofence = (dynamicRate: DynamicRateProps) => {
    const loadedGeofence: DynamicRateProps = {
      ...dynamicRate,
      color: selectedColor,
    };
    setSelectedDynamicRate(loadedGeofence);
  };

  const handlePolygonUpdate = (updatedPaths: google.maps.LatLngLiteral[]) => {
    setNewPaths(updatedPaths);
    console.log("Updated Paths in PageEdit:", updatedPaths);
  };

  const parseTime = (timeString: string) => {
    const [time, period] = timeString.split(" "); // Separar la hora del AM/PM
    const [hour, minutes] = time.split(":"); // Separar la hora y los minutos
    return { hour, minutes, period };
  };

  const start = parseTime(selectedDynamicRate?.startHour!);
  const end = parseTime(selectedDynamicRate?.endHour!);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const colorValue = e.target.value;
    setSelectedColor(colorValue);
    onChangeColor(colorValue);
  };

  const handleToggleDynamicRate = () => {
    setIsDynamicRateChecked(!isDynamicRateChecked);
    onToggleDynamicRate(!isDynamicRateChecked);
  };

  const handleToggleOnDemand = () => {
    setIsOnDemandChecked(!isOnDemandChecked);
    onToggleOnDemand(!isOnDemandChecked);
  };

  const updateGeofenceField = (fieldName: string, newValue: any) => {
    setSelectedDynamicRate((prevState) => {
      // Si prevState es null, usamos un objeto Geofence vacío como valor por defecto
      const currentGeofence = prevState || {
        id: "",
        name: "",
        color: "",
        ubicationName: "",
        polygons: [], // Asegúrate de proporcionar un valor por defecto para todas las propiedades requeridas
        // ... otros campos de Geofence
      };

      return {
        ...currentGeofence,
        [fieldName]: newValue,
      };
    });
  };

  const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
    setPlace(place);
  };

  return (
    <main className="bg-gray-100 w-auto h-full">
      <section className="flex gap-2 p-5">
        <div className="flex flex-col gap-3 min-w-[500px] w-[600px] max-w-[800px]">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <IconChevronLeft size={30} />
              <div className="flex gap-2 items-center">
                <IconMapPins size={20} />
                <p className="text-[12px]">Tarifa dinámica</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-black flex items-center p-1 px-2 rounded-l-lg">
                <IconCoinFilled size={20} color="white" />
                <p className="text-white text-[12px]">Tarifa General</p>
              </div>
              <div className="bg-white flex items-center p-1 px-2 rounded-r-lg">
                <p className="text-black text-[12px]">$ 15.00 Km</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <article className="bg-white rounded-lg p-2 flex flex-col gap-2">
              <p className="text-[14px] font-bold">Nombre</p>
              <hr className="mx-1" />
              <input
                type="text"
                onChange={(e) =>
                  updateGeofenceField("geofenceName", e.target.value)
                }
                value={selectedDynamicRate?.name || ""}
                className="bg-gray-100 rounded-lg h-[30px] text-[13px] text-center focus:outline-none"
              />
            </article>
            <article className="bg-white rounded-lg p-2 flex flex-col gap-2">
              <p className="text-[14px] font-bold">Ubicación</p>
              <hr className="mx-1" />
              <div className="relative">
                <IconMapPinFilled size={20} className="absolute top-1 left-1" />
                <LocationSearch
                  value={selectedDynamicRate?.ubicationName || ""}
                  onPlaceSelect={handlePlaceSelect}
                  otherStyles="h-[30px] text-black bg-gray-100 text-center"
                />
                {/*<input type="text" onChange={e => updateGeofenceField('geofenceLocation',e.target.value)} value={selectedGeofence?.geofenceLocation || ''} className='bg-gray-100 rounded-lg h-[30px] text-[13px] text-center focus:outline-none' />*/}
              </div>
            </article>
            <article className="bg-white rounded-lg p-2 flex flex-col gap-2">
              <p className="text-[14px] font-bold">Tarifa Inicial</p>
              <hr className="mx-1" />
              <div className="flex gap-1 items-center">
                <p className="text-[14px] font-bold">$</p>
                <input
                  type="text"
                  onChange={(e) =>
                    updateGeofenceField("initialRate", e.target.value)
                  }
                  value={selectedDynamicRate?.initialRate || ""}
                  className="bg-gray-100 rounded-lg h-[30px] w-[100px] text-[13px] text-center focus:outline-none"
                />
                <p className="text-[14px] font-bold">MX</p>
              </div>
            </article>
          </div>
          <div className="flex flex-col">
            <div className="bg-white w-full flex justify-between p-2 items-center rounded-t-lg">
              <p className="text-[12px] font-bold">Ubicación</p>
              <div className="flex gap-2 items-center">
                <IconTimeline
                  size={20}
                  color={mode === "edit" ? "orange" : "black"}
                  onClick={() => setMode("edit")}
                />
                <IconCurrentLocation
                  size={20}
                  color={mode === "view" ? "orange" : "black"}
                  onClick={() => setMode("view")}
                />
              </div>
            </div>
            <GeofenceMap
              singlePolygon={{
                color: dynamicRate?.color!,
                polygons: dynamicRate?.polygons!,
              }}
              center={center || { lat: 21.4905, lng: -104.88508 }}
              mode={mode}
              onPolygonUpdate={handlePolygonUpdate}
              width={width}
              height={height}
              zoom={zoom || 14}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-3 w-auto">
          <button className="bg-black text-white p-1 rounded-2xl text-[12px] h-[30px]">
            Guardar
          </button>
          <article className="bg-white p-2 rounded-lg flex flex-col gap-2">
            <div className="flex items-center">
              <Switch
                initialOn={isDynamicRateChecked}
                onToggle={handleToggleDynamicRate}
              />
              <div className="ml-3 text-gray-700 font-medium flex items-center">
                <p className="text-[13px]">Tarifa Dinámica</p>
                <IconInfoCircle size={15} />
              </div>
            </div>
            <hr />
            <div className="flex gap-1 items-center">
              <p className="text-[12px]">Precio sobre kilómetro</p>
              <IconInfoCircle size={15} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[14px] font-bold">$</p>
              <input
                type="text"
                onChange={(e) =>
                  updateGeofenceField("dynamicRateMinPrice", e.target.value)
                }
                value={selectedDynamicRate?.pricePerKilometer || ""}
                className="bg-gray-100 rounded-lg w-[50px] h-[30px] text-[13px] text-center focus:outline-none"
              />
              <p className="text-[14px] font-bold">{">"}</p>
              <input
                type="text"
                onChange={(e) =>
                  updateGeofenceField("dynamicRateMaxDistance", e.target.value)
                }
                value={selectedDynamicRate?.kilometers || ""}
                className="bg-gray-100 rounded-lg w-[50px] h-[30px] text-[13px] text-center focus:outline-none"
              />
              <p className="text-[14px] font-bold">km</p>
            </div>
            <hr />
            <div className="flex gap-1 items-center">
              <p className="text-[12px]">Horario</p>
              <IconInfoCircle size={15} />
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                value={start.hour || "9"}
                className="bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none"
              />
              <input
                type="text"
                value={start.minutes || "00"}
                className="bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none"
              />
              <p className="text-[14px] font-bold">-</p>
              <input
                type="text"
                value={start.period || "PM"}
                className="bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none"
              />
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                value={end.hour || "5"}
                className="bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none"
              />
              <input
                type="text"
                value={end.minutes || "00"}
                className="bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none"
              />
              <p>-</p>
              <input
                type="text"
                value={end.period || "AM"}
                className="bg-gray-100 rounded-lg w-[40px] h-[30px] text-[13px] text-center focus:outline-none"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <p className="text-[14px] font-bold">$</p>
              <input
                type="text"
                onChange={(e) =>
                  updateGeofenceField("rateForHour", e.target.value)
                }
                value={selectedDynamicRate?.priceOnDemand || ""}
                className="bg-gray-100 rounded-lg w-[100px] h-[30px] text-[13px] text-center focus:outline-none"
              />
              <p className="text-[14px] font-bold">MXN</p>
            </div>
            <hr />
            <div className="flex items-center">
              <Switch
                initialOn={isOnDemandChecked}
                onToggle={handleToggleOnDemand}
              />
              <div className="ml-3 text-gray-700 font-medium flex items-center">
                <p className="text-[13px]">Sobre demanda</p>
                <IconInfoCircle size={15} />
              </div>
            </div>
          </article>
          <article className="bg-white flex flex-col gap-2 p-2 rounded-lg">
            <div className="flex gap-1 text-[12px] items-center">
              <p>Color</p>
              <IconInfoCircle size={15} />
            </div>
            <hr />
            <div className="flex gap-1 text-[14px] items-center">
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => {
                  handleColorChange(e);
                  updateGeofenceField("geofenceColor", e.target.value);
                }}
                className="border border-gray-400 rounded-md"
              />
              <p>{selectedColor}</p>
            </div>
          </article>
          <article className="bg-white flex flex-col gap-2 p-2 rounded-lg">
            <div className="flex gap-1 text-[12px] items-center">
              <p>Prioridad de zona</p>
              <IconInfoCircle size={15} />
            </div>
            <hr />
            <div className="flex gap-2 items-center text-[12px]">
              <div className="flex gap-1 bg-gray-100 rounded-2xl p-1 items-center relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                  <IconStack2 className="h-5 w-5" />
                </div>
                <select
                  name="priorityZone"
                  id="priorityZone"
                  className="block bg-gray-100 appearance-none w-full px-2 py-1 pl-6 rounded-2xl leading-tight focus:outline-none"
                  value={selectedDynamicRate?.priority}
                >
                  <option value="low">Baja</option>
                </select>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PageEdit;
