import React, { useRef, useState, useEffect } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { InputSearchProps, PlaceDetails } from "./type";

const InputSearch: React.FC<InputSearchProps> = ({
  value = "",
  onSelectLocation,
  CSS = [],
  isLoaded,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const customCSS = [];
  if (CSS.length > 0) customCSS.push(CSS.join(" "));

  // Mantener sincronizado el input con la prop externa "value"
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handlePlaceChanged = () => {
    const autocomplete = autocompleteRef.current;
    if (!autocomplete) return;

    const place = autocomplete.getPlace();
    console.log("place", place);
    const location = place.geometry?.location;

    if (!location) {
      console.warn("⚠️ No se pudo obtener la ubicación.");
      return;
    }

    const lat = location.lat();
    const lng = location.lng();

    const addressComponents = place.address_components || [];
    const placeTypes = place.types || [];

    // Tipos que indican que es una dirección o colonia
    const nonCityTypes = [
      "route",
      "street_address",
      "premise",
      "sublocality",
      "sublocality_level_1",
      "neighborhood",
    ];

    // ⚠️ Si contiene alguno de estos tipos, NO es ciudad
    const isSpecificAddress = placeTypes.some((type) =>
      nonCityTypes.includes(type)
    );

    // ✅ Solo si NO es dirección y SÍ tiene city/municipio, marcamos como ciudad
    const isCity =
      !isSpecificAddress &&
      (placeTypes.includes("locality") ||
        placeTypes.includes("administrative_area_level_2") ||
        placeTypes.includes("administrative_area_level_1") ||
        placeTypes.includes("country"));

    // Si es ciudad, extrae solo el nombre de la ciudad/municipio
    let name = place.name || "Lugar desconocido";
    if (isCity) {
      const cityComponent = addressComponents.find(
        (component) =>
          component.types.includes("locality") ||
          component.types.includes("administrative_area_level_2")
      );
      if (cityComponent?.long_name) {
        name = cityComponent.long_name;
      }
    }

    const details: PlaceDetails & { isCity: boolean } = {
      name,
      lat,
      lng,
      isCity,
    };

    setInputValue(name);
    if (onSelectLocation) onSelectLocation(details);

    console.log("✅ Lugar seleccionado:", details);
  };

  if (!isLoaded || typeof google === "undefined") {
    return <div>Cargando buscador de ubicaciones...</div>;
  }

  return (
    <div>
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          ref={inputRef}
          className={customCSS.join(" ")}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Buscar lugar"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </Autocomplete>
    </div>
  );
};

export default InputSearch;
