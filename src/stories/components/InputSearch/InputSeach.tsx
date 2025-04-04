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

    if (place.geometry && place.geometry.location) {
      const location = place.geometry.location;
      const lat = location.lat();
      const lng = location.lng();
      const name = place.name || "Lugar desconocido";

      const details: PlaceDetails = { name, lat, lng };

      setInputValue(name); // actualizar campo visible

      if (onSelectLocation) {
        onSelectLocation(details); // enviar al componente padre
      }

      console.log("📍 Lugar seleccionado:", details);
    } else {
      console.warn(
        "⚠️ No se pudo obtener la ubicación del lugar seleccionado."
      );
    }
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
