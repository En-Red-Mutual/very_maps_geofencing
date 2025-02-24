import React from "react";
import GeofenceMap from "../Mapa/Map";
import Switch from "../Switch/Switch";

interface CreatePolygonProps {
  center: google.maps.LatLngLiteral;
}

export default function CreatePolygon({ center }: CreatePolygonProps) {
  const [mode, setMode] = React.useState<"new" | "edit" | "view" | "preview">(
    "new"
  );
  const [newpaths, setNewPaths] = React.useState<google.maps.LatLngLiteral[]>(
    []
  );
  console.log("mode", mode);

  const handlePolygonComplete = (paths: google.maps.LatLngLiteral[]) => {
    console.log("paths in create", paths);
    setNewPaths(paths);
  };
  return (
    <div className="flex flex-col gap-2">
      <h1>createpolygon</h1>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={mode === "edit"}
          onChange={() => setMode("edit")}
        />
        <label>Editar</label>
        <input
          type="checkbox"
          checked={mode === "view"}
          onChange={() => setMode("view")}
        />
        <label>Ver</label>
        <input
          type="checkbox"
          checked={mode === "new"}
          onChange={() => setMode("new")}
        />
        <label>Nuevo</label>
        <input
          type="checkbox"
          checked={mode === "preview"}
          onChange={() => setMode("preview")}
        />
        <label>Preview</label>
      </div>
      <GeofenceMap
        mode={mode}
        center={center}
        height="500px"
        width="100%"
        zoom={15}
        onPolygonComplete={handlePolygonComplete}
        createdPolygon={mode === "preview" ? newpaths : undefined}
      />
    </div>
  );
}
