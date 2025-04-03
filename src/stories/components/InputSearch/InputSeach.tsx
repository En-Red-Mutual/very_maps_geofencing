import React, { useRef, useState, useEffect } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { InputSearchProps, PlaceDetails } from "./type";

const libraries = ["places"] as ["places"];

const InputSearch: React.FC<InputSearchProps> = ({
  value = "",
  onSelectLocation,
  CSS = [],
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

      // Actualiza el valor del input
      setInputValue(name);

      // Envía al componente padre
      if (onSelectLocation) {
        onSelectLocation(details);
      }

      console.log("📍 Lugar seleccionado:", details);
    } else {
      console.warn(
        "⚠️ No se pudo obtener la ubicación del lugar seleccionado."
      );
    }
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyDZ2gn0lNxRo4x6fsg6ne9oNoMT9mDMDAo"
        libraries={libraries}
      >
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
      </LoadScript>
    </div>
  );
};

export default InputSearch;
