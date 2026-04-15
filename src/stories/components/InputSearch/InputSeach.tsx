import React, { useRef, useState, useEffect } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { InputSearchProps, PlaceDetails } from "./type";

const InputSearch: React.FC<InputSearchProps> = ({
  value = "",
  onSelectLocation,
  CSS = [],
  isLoaded,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const places = useMapsLibrary("places");
  const customCSS: string[] = [];
  if (CSS.length > 0) customCSS.push(CSS.join(" "));

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const autocomplete = new places.Autocomplete(inputRef.current);
    autocompleteRef.current = autocomplete;

    const listener = autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const location = place.geometry?.location;

      if (!location) {
        console.warn("⚠️ No se pudo obtener la ubicación.");
        return;
      }

      const lat = location.lat();
      const lng = location.lng();

      const addressComponents = place.address_components || [];
      const placeTypes = place.types || [];

      const nonCityTypes = [
        "route",
        "street_address",
        "premise",
        "sublocality",
        "sublocality_level_1",
        "neighborhood",
      ];

      const isSpecificAddress = placeTypes.some((type) =>
        nonCityTypes.includes(type),
      );

      const isCity =
        !isSpecificAddress &&
        (placeTypes.includes("locality") ||
          placeTypes.includes("administrative_area_level_2") ||
          placeTypes.includes("administrative_area_level_1") ||
          placeTypes.includes("country"));

      let name = place.name || "Lugar desconocido";
      if (isCity) {
        const cityComponent = addressComponents.find(
          (component) =>
            component.types.includes("locality") ||
            component.types.includes("administrative_area_level_2"),
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
    });

    return () => {
      google.maps.event.removeListener(listener);
    };
  }, [places]);

  if (!isLoaded || typeof google === "undefined") {
    return <div>Cargando buscador de ubicaciones...</div>;
  }

  return (
    <div>
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
    </div>
  );
};

export default InputSearch;
