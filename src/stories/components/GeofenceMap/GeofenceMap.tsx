import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Map,
  useMap,
  useMapsLibrary,
  MapCameraChangedEvent,
  MapMouseEvent,
} from "@vis.gl/react-google-maps";
import { DynamicRateProps, MapProps } from "./type";
import GeofenceModal from "../GeofenceModal/GeofenceModal";
import {
  IconStackBack,
  IconStackFront,
  IconStackMiddle,
} from "@tabler/icons-react";

/* ─── MapOverlay ─────────────────────────────────────────────────────────── */

interface MapOverlayProps {
  position: google.maps.LatLngLiteral;
  children: React.ReactNode;
}

const MapOverlay: React.FC<MapOverlayProps> = ({ position, children }) => {
  const map = useMap();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<google.maps.OverlayView | null>(null);

  if (!containerRef.current) {
    containerRef.current = document.createElement("div");
    containerRef.current.style.position = "absolute";
  }

  useEffect(() => {
    if (!map || !containerRef.current) return;
    const container = containerRef.current;

    const overlay = new google.maps.OverlayView();
    overlay.onAdd = function () {
      (this.getPanes()!.overlayMouseTarget as HTMLElement).appendChild(
        container,
      );
    };
    overlay.draw = function () {
      const proj = this.getProjection();
      if (!proj) return;
      const pt = proj.fromLatLngToDivPixel(
        new google.maps.LatLng(position.lat, position.lng),
      );
      if (pt) {
        container.style.left = `${pt.x}px`;
        container.style.top = `${pt.y}px`;
      }
    };
    overlay.onRemove = function () {
      container.parentNode?.removeChild(container);
    };
    overlay.setMap(map);
    overlayRef.current = overlay;

    return () => {
      overlay.setMap(null);
    };
  }, [map]);

  useEffect(() => {
    overlayRef.current?.draw();
  }, [position.lat, position.lng]);

  return createPortal(children, containerRef.current);
};

/* ─── ViewPolygon ────────────────────────────────────────────────────────── */

interface ViewPolygonProps {
  paths: google.maps.LatLngLiteral[];
  options: google.maps.PolygonOptions;
}

const ViewPolygon: React.FC<ViewPolygonProps> = ({ paths, options }) => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    const polygon = new google.maps.Polygon({ ...options, paths, map });
    return () => polygon.setMap(null);
  }, [map]);
  return null;
};

/* ─── EditPolygon ────────────────────────────────────────────────────────── */

interface EditPolygonProps {
  paths: google.maps.LatLngLiteral[];
  color: string;
  onPolygonUpdate?: (paths: google.maps.LatLngLiteral[]) => void;
}

const EditPolygon: React.FC<EditPolygonProps> = ({
  paths,
  color,
  onPolygonUpdate,
}) => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;

    const mvcPath = new google.maps.MVCArray(
      paths.map((p) => new google.maps.LatLng(p.lat, p.lng)),
    );

    const polygon = new google.maps.Polygon({
      fillColor: color,
      fillOpacity: 0.35,
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      clickable: true,
      editable: true,
      zIndex: 1,
      map,
    });
    polygon.setPath(mvcPath);

    const updatePath = () => {
      const updatedPaths = mvcPath.getArray().map((point) => ({
        lat: point.lat(),
        lng: point.lng(),
      }));
      onPolygonUpdate?.(updatedPaths);
    };

    google.maps.event.addListener(mvcPath, "set_at", updatePath);
    google.maps.event.addListener(mvcPath, "insert_at", updatePath);
    google.maps.event.addListener(mvcPath, "remove_at", updatePath);

    google.maps.event.addListener(polygon, "rightclick", (e: any) => {
      const clickedLatLng = e.latLng;
      let closestIndex = -1;
      let minDistance = Infinity;
      mvcPath.forEach((point, index) => {
        const dist = google.maps.geometry.spherical.computeDistanceBetween(
          point,
          clickedLatLng,
        );
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = index;
        }
      });
      if (closestIndex !== -1 && minDistance < 25) {
        mvcPath.removeAt(closestIndex);
      }
    });

    updatePath();

    return () => {
      polygon.setMap(null);
      google.maps.event.clearInstanceListeners(polygon);
      google.maps.event.clearInstanceListeners(mvcPath);
    };
  }, [map]);

  return null;
};

/* ─── DrawingManagerComp ─────────────────────────────────────────────────── */

interface DrawingManagerProps {
  onOverlayComplete: (e: google.maps.drawing.OverlayCompleteEvent) => void;
}

const DrawingManagerComp: React.FC<DrawingManagerProps> = ({
  onOverlayComplete,
}) => {
  const map = useMap();
  const drawing = useMapsLibrary("drawing");

  useEffect(() => {
    if (!map || !drawing) return;

    const dm = new drawing.DrawingManager({
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
    });
    dm.setMap(map);

    const listener = google.maps.event.addListener(
      dm,
      "overlaycomplete",
      onOverlayComplete,
    );

    return () => {
      google.maps.event.removeListener(listener);
      dm.setMap(null);
    };
  }, [map, drawing]);

  return null;
};

/* ─── GeofenceMap ────────────────────────────────────────────────────────── */

export default function GeofenceMap({
  dynamicRates,
  mode,
  singlePolygon,
  center,
  onPolygonUpdate,
  onPolygonComplete,
  createdPolygon,
  drawingPoints,
  onMapClick,
  onEditGeofence,
  height,
  width,
  zoom,
  isLoaded,
}: MapProps) {
  const [selectedGeofence, setSelectedGeofence] =
    useState<DynamicRateProps | null>(null);
  const [zoomLevel, setZoomLevel] = useState(zoom || 14);
  const [cameraCenter, setCameraCenter] = useState<google.maps.LatLngLiteral>(
    () => {
      const isValid =
        center &&
        typeof center.lat === "number" &&
        typeof center.lng === "number" &&
        isFinite(center.lat) &&
        isFinite(center.lng);
      return isValid
        ? center!
        : { lat: 21.491739494411178, lng: -104.89237419696244 };
    },
  );

  useEffect(() => {
    if (
      center &&
      typeof center.lat === "number" &&
      typeof center.lng === "number" &&
      isFinite(center.lat) &&
      isFinite(center.lng)
    ) {
      setCameraCenter(center);
    }
  }, [center?.lat, center?.lng]);

  useEffect(() => {
    if (zoom !== undefined) setZoomLevel(zoom);
  }, [zoom]);

  if (!isLoaded || typeof google === "undefined") {
    return <div>Loading...</div>;
  }

  const handleOverlayComplete = (
    e: google.maps.drawing.OverlayCompleteEvent,
  ) => {
    if (e.type === "polygon") {
      const polygon = e.overlay as google.maps.Polygon;
      const paths = polygon
        .getPath()
        .getArray()
        .map((point) => ({ lat: point.lat(), lng: point.lng() }));
      polygon.setMap(null);
      onPolygonComplete?.(paths);
    }
  };

  const getPolygonCenter = (paths: google.maps.LatLngLiteral[]) => {
    let lat = 0;
    let lng = 0;
    paths.forEach((point) => {
      lat += point.lat;
      lng += point.lng;
    });
    return { lat: lat / paths.length, lng: lng / paths.length - 0.002 };
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

  function groupGeofencesByUbication(
    rates: DynamicRateProps[],
    threshold = 0.05,
  ) {
    if (!rates || rates.length === 0) return [];
    const groups: DynamicRateProps[][] = [];

    rates.forEach((rate) => {
      if (!rate.ubicationCoordinates) return;

      const { lat, lng } = rate.ubicationCoordinates;
      let added = false;

      for (const group of groups) {
        const groupCoord = group[0].ubicationCoordinates;
        if (!groupCoord) continue;
        const dist = Math.hypot(lat - groupCoord.lat, lng - groupCoord.lng);
        if (dist < threshold) {
          group.push(rate);
          added = true;
          break;
        }
      }

      if (!added) groups.push([rate]);
    });

    return groups;
  }

  return (
    <div style={{ height, width }}>
      <Map
        center={cameraCenter}
        zoom={zoomLevel}
        onCenterChanged={(e: MapCameraChangedEvent) => {
          setCameraCenter(e.detail.center);
        }}
        onZoomChanged={(e: MapCameraChangedEvent) => {
          setZoomLevel(e.detail.zoom);
        }}
        onClick={(e: MapMouseEvent) => {
          if (mode === "new" && onMapClick && e.detail.latLng) {
            onMapClick(e.detail.latLng);
          }
        }}
        style={{ height: "100%", width: "100%" }}
        fullscreenControl={false}
        disableDefaultUI={true}
        zoomControl={true}
        disableDoubleClickZoom={true}
        mapTypeControl={true}
      >
        {mode === "view" && singlePolygon && (
          <ViewPolygon
            paths={singlePolygon.polygons}
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
          dynamicRates.map((rate, index) => (
            <React.Fragment key={index}>
              {rate.polygons && rate.polygons.length > 0 && (
                <ViewPolygon
                  paths={rate.polygons}
                  options={{
                    fillColor: rate.color,
                    fillOpacity: 0.35,
                    strokeColor: rate.color,
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                  }}
                />
              )}
              {zoomLevel > 13 && rate.polygons && rate.polygons.length > 0 && (
                <MapOverlay position={getPolygonCenter(rate.polygons)}>
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
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "1px",
                          fontWeight: "normal",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {rate.priority === "principal" ? (
                          <>
                            <IconStackFront
                              size={25}
                              stroke={1.5}
                              color="white"
                            />
                            <span className="text-white">1</span>
                          </>
                        ) : rate.priority === "secundario" ? (
                          <>
                            <IconStackMiddle
                              size={25}
                              stroke={1.5}
                              color="white"
                            />
                            <span className="text-white">2</span>
                          </>
                        ) : rate.priority === "terciario" ? (
                          <>
                            <IconStackBack
                              size={25}
                              stroke={1.5}
                              color="white"
                            />
                            <span className="text-white">3</span>
                          </>
                        ) : null}
                      </div>
                      <span>{rate.name}</span>
                    </div>
                  </div>
                </MapOverlay>
              )}

              {selectedGeofence &&
                selectedGeofence.polygons &&
                selectedGeofence.polygons.length > 0 && (
                  <MapOverlay
                    position={getModalCenter(selectedGeofence.polygons)}
                  >
                    <GeofenceModal
                      dynamicRate={selectedGeofence}
                      onClose={() => setSelectedGeofence(null)}
                      onEdit={
                        onEditGeofence
                          ? () => {
                              onEditGeofence(selectedGeofence!);
                              setSelectedGeofence(null);
                            }
                          : undefined
                      }
                    />
                  </MapOverlay>
                )}
            </React.Fragment>
          ))}

        {mode === "view" &&
          !singlePolygon &&
          zoomLevel <= 13 &&
          groupGeofencesByUbication(dynamicRates ?? []).map((group, idx) => (
            <MapOverlay
              key={`group-${idx}`}
              position={group[0].ubicationCoordinates}
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
                {group.length}
              </div>
            </MapOverlay>
          ))}

        {mode === "new" && !onMapClick && (
          <DrawingManagerComp onOverlayComplete={handleOverlayComplete} />
        )}

        {mode === "new" && drawingPoints && drawingPoints.length >= 2 && (
          <ViewPolygon
            paths={drawingPoints}
            options={{
              fillColor: "orange",
              fillOpacity: 0.15,
              strokeColor: "orange",
              strokeOpacity: 0.9,
              strokeWeight: 2,
              zIndex: 2,
            }}
          />
        )}

        {mode === "new" &&
          onMapClick &&
          drawingPoints?.map((pt, i) => (
            <MapOverlay key={`dp-${i}`} position={pt}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  background: "orange",
                  border: "2px solid white",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
                }}
              />
            </MapOverlay>
          ))}

        {mode === "preview" && createdPolygon && createdPolygon.length > 0 && (
          <ViewPolygon
            paths={createdPolygon}
            options={{
              fillColor: "orange",
              fillOpacity: 0.35,
              strokeWeight: 2,
              strokeColor: "orange",
              zIndex: 1,
            }}
          />
        )}

        {mode === "edit" &&
          singlePolygon &&
          singlePolygon.polygons.length > 0 && (
            <EditPolygon
              paths={singlePolygon.polygons}
              color={singlePolygon.color}
              onPolygonUpdate={onPolygonUpdate}
            />
          )}
      </Map>
    </div>
  );
}
