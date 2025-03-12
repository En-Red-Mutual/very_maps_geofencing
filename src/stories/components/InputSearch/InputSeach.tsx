import React, { useRef, useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"] as ["places"];
interface PlaceDetails {
  name: string;
  lat: number;
  lng: number;
}

const InputSearch = () => {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handlePlaceChanged = () => {
    const autocomplete = autocompleteRef.current;
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = place.geometry.location;
        const lat = location.lat();
        const lng = location.lng();
        const name = place.formatted_address || "Unknown place";
        setPlaceDetails({
          name,
          lat,
          lng,
        });
        console.log("Lugar seleccionado:", name, "Coordenadas:", lat, lng);
      }
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
            type="text"
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

      {placeDetails && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Nombre:</strong> {placeDetails.name}
          </p>
          <p>
            <strong>Latitud:</strong> {placeDetails.lat}
          </p>
          <p>
            <strong>Longitud:</strong> {placeDetails.lng}
          </p>
        </div>
      )}
    </div>
  );
};

export default InputSearch;
