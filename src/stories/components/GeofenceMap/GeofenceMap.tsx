import React, { useRef, useState } from "react";
import {
  GoogleMap,
  Polygon,
  DrawingManager,
  useLoadScript,
  OverlayView,
} from "@react-google-maps/api";
import { DynamicRateProps, MapProps } from "./type";
import GeofenceModal from "../GeofenceModal/GeofenceModal";

export const libraries = ["drawing", "places"] as ["drawing", "places"];

export default function GeofenceMap({
  dynamicRates,
  mode,
  singlePolygon,
  center,
  onPolygonUpdate,
  onPolygonComplete,
  createdPolygon,
  height,
  width,
  zoom,
}: MapProps) {
  const [selectedGeofence, setSelectedGeofence] =
    useState<DynamicRateProps | null>(null);

  const [newPaths, setNewPaths] = useState<google.maps.LatLngLiteral[]>([]);

  const polygonRef = useRef<google.maps.Polygon | null>(null);
  const [zoomLevel, setZoomLevel] = useState(zoom || 14);

  const handleZoomChanged = (map: google.maps.Map) => {
    setZoomLevel(map.getZoom()!);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDZ2gn0lNxRo4x6fsg6ne9oNoMT9mDMDAo",
    libraries: libraries,
  });
  if (!isLoaded) return <div>Loading Map...</div>;

  const getPolygonPaths = (polygon: google.maps.Polygon) => {
    const paths = polygon
      .getPath()
      .getArray()
      .map((point) => ({ lat: point.lat(), lng: point.lng() }));

    setNewPaths(paths);
    onPolygonComplete && onPolygonComplete(paths);
  };

  const handleOverlayComplete = (
    e: google.maps.drawing.OverlayCompleteEvent
  ) => {
    if (e.type === "polygon") {
      const polygon = e.overlay as google.maps.Polygon;

      // Guarda la referencia del polígono
      polygonRef.current = polygon;
      getPolygonPaths(polygon);

      // Escucha los cambios en el polígono editable
      google.maps.event.addListener(polygon.getPath(), "set_at", () =>
        getPolygonPaths(polygon)
      );
      google.maps.event.addListener(polygon.getPath(), "insert_at", () =>
        getPolygonPaths(polygon)
      );
      google.maps.event.addListener(polygon.getPath(), "remove_at", () =>
        getPolygonPaths(polygon)
      );
    }
  };

  const getPolygonCenter = (paths: google.maps.LatLngLiteral[]) => {
    let lat = 0;
    let lng = 0;
    paths.forEach((point) => {
      lat += point.lat;
      lng += point.lng;
    });
    return {
      lat: lat / paths.length,
      lng: lng / paths.length - 0.002,
    };
  };

  const getModalCenter = (paths: google.maps.LatLngLiteral[]) => {
    let lat = 0;
    let lng = 0;
    paths.forEach((point) => {
      lat += point.lat;
      lng += point.lng;
    });
    return {
      lat: lat / paths.length + 0.004,
      lng: lng / paths.length + 0.004,
    };
  };

  console.log("newPaths", newPaths);

  return (
    <div>
      <GoogleMap
        center={center || { lat: 21.4905, lng: -104.88508 }}
        zoom={zoomLevel}
        onLoad={(map) => {
          map.addListener("zoom_changed", () => handleZoomChanged(map));
        }}
        mapContainerStyle={{ height: height, width: width }}
        options={{
          fullscreenControl: false,
          disableDefaultUI: true,
          zoomControl: true,
          disableDoubleClickZoom: true,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          },
        }}
      >
        {mode === "view" && singlePolygon && (
          <Polygon
            path={singlePolygon.polygons}
            options={{
              fillColor: singlePolygon.color,
              fillOpacity: 0.35,
              strokeColor: singlePolygon.color,
              strokeOpacity: 0.8,
              strokeWeight: 2,
            }}
          />
        )}
        {mode === "view" &&
          dynamicRates &&
          dynamicRates!.map((rate, index) => (
            <>
              <Polygon
                key={index}
                path={rate.polygons}
                options={{
                  fillColor: rate.color,
                  fillOpacity: 0.35,
                  strokeColor: rate.color,
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                }}
              />
              {zoomLevel > 13 ? (
                <OverlayView
                  position={getPolygonCenter(rate.polygons!)}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <>
                    <div
                      onClick={() => setSelectedGeofence(rate)}
                      className="truncate"
                      style={{
                        backgroundColor: rate.color,
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                      }}
                    >
                      <span>{rate.name}</span>
                    </div>
                  </>
                </OverlayView>
              ) : (
                index === 0 && (
                  <OverlayView
                    position={getPolygonCenter(rate.polygons!)}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  >
                    <div
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "50px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                      }}
                    >
                      {`${dynamicRates.length}`}
                    </div>
                  </OverlayView>
                )
              )}
              {selectedGeofence && (
                <OverlayView
                  position={getModalCenter(selectedGeofence.polygons!)}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <GeofenceModal
                    dynamicRate={selectedGeofence}
                    onClose={() => setSelectedGeofence(null)}
                  />
                </OverlayView>
              )}
            </>
          ))}
        {mode === "new" && (
          <DrawingManager
            options={{
              drawingControl: true,
              drawingControlOptions: {
                drawingModes: [google.maps.drawing.OverlayType.POLYGON],
              },
              polygonOptions: {
                fillColor: "orange",
                fillOpacity: 0.35,
                strokeWeight: 2,
                strokeColor: "orange",
                clickable: true,
                editable: true,
                zIndex: 1,
              },
            }}
            onOverlayComplete={handleOverlayComplete}
          />
        )}
        {mode === "preview" && createdPolygon && (
          <Polygon
            path={createdPolygon}
            options={{
              fillColor: "orange",
              fillOpacity: 0.35,
              strokeWeight: 2,
              strokeColor: "orange",
              zIndex: 1,
            }}
          />
        )}

        {mode === "edit" && singlePolygon && (
          <Polygon
            path={singlePolygon.polygons}
            options={{
              fillColor: singlePolygon.color,
              fillOpacity: 0.35,
              strokeColor: singlePolygon.color,
              strokeOpacity: 0.8,
              strokeWeight: 2,
              clickable: true,
              editable: true, // Permitir edición
              zIndex: 1,
            }}
            onLoad={(polygon) => {
              polygonRef.current = polygon; // Guardamos la referencia del polígono
            }}
            // Evento cuando se modifica el polígono (añadir, quitar o mover puntos)
            onMouseUp={() => {
              if (polygonRef.current) {
                const updatedPaths = polygonRef.current
                  .getPath()
                  .getArray()
                  .map((point) => ({
                    lat: point.lat(),
                    lng: point.lng(),
                  }));
                setNewPaths(updatedPaths);
                onPolygonUpdate && onPolygonUpdate(updatedPaths);
                console.log("Updated Polygon Paths (onMouseUp):", updatedPaths);
              }
            }}
            onDragEnd={() => {
              if (polygonRef.current) {
                const updatedPaths = polygonRef.current
                  .getPath()
                  .getArray()
                  .map((point) => ({
                    lat: point.lat(),
                    lng: point.lng(),
                  }));
                setNewPaths(updatedPaths);
                onPolygonUpdate && onPolygonUpdate(updatedPaths);
                console.log("Updated Polygon Paths (onDragEnd):", updatedPaths);
              }
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}
