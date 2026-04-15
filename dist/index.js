import React2, { forwardRef, createElement, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';

var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs
var defaultAttributes;
var init_defaultAttributes = __esm({
  "node_modules/@tabler/icons-react/dist/esm/defaultAttributes.mjs"() {
    defaultAttributes = {
      outline: {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      filled: {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        stroke: "none"
      }
    };
  }
});
var createReactComponent;
var init_createReactComponent = __esm({
  "node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs"() {
    init_defaultAttributes();
    createReactComponent = (type, iconName, iconNamePascal, iconNode) => {
      const Component = forwardRef(
        ({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref) => createElement(
          "svg",
          {
            ref,
            ...defaultAttributes[type],
            width: size,
            height: size,
            className: [`tabler-icon`, `tabler-icon-${iconName}`, className].join(" "),
            ...type === "filled" ? {
              fill: color
            } : {
              strokeWidth: stroke,
              stroke: color
            },
            ...rest
          },
          [
            title && createElement("title", { key: "svg-title" }, title),
            ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
            ...Array.isArray(children) ? children : [children]
          ]
        )
      );
      Component.displayName = `${iconNamePascal}`;
      return Component;
    };
  }
});

// node_modules/@tabler/icons-react/dist/esm/icons/IconPencil.mjs
var IconPencil;
var init_IconPencil = __esm({
  "node_modules/@tabler/icons-react/dist/esm/icons/IconPencil.mjs"() {
    init_createReactComponent();
    IconPencil = createReactComponent("outline", "pencil", "IconPencil", [["path", { "d": "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", "key": "svg-0" }], ["path", { "d": "M13.5 6.5l4 4", "key": "svg-1" }]]);
  }
});

// node_modules/@tabler/icons-react/dist/esm/icons/IconStackBack.mjs
var IconStackBack;
var init_IconStackBack = __esm({
  "node_modules/@tabler/icons-react/dist/esm/icons/IconStackBack.mjs"() {
    init_createReactComponent();
    IconStackBack = createReactComponent("outline", "stack-back", "IconStackBack", [["path", { "d": "M4 8l8 4l8 -4l-8 -4z", "key": "svg-0" }], ["path", { "d": "M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z", "fill": "currentColor", "key": "svg-1" }], ["path", { "d": "M8 10l-4 2l4 2m8 0l4 -2l-4 -2", "key": "svg-2" }]]);
  }
});

// node_modules/@tabler/icons-react/dist/esm/icons/IconStackFront.mjs
var IconStackFront;
var init_IconStackFront = __esm({
  "node_modules/@tabler/icons-react/dist/esm/icons/IconStackFront.mjs"() {
    init_createReactComponent();
    IconStackFront = createReactComponent("outline", "stack-front", "IconStackFront", [["path", { "d": "M12 4l-8 4l8 4l8 -4l-8 -4", "fill": "currentColor", "key": "svg-0" }], ["path", { "d": "M8 14l-4 2l8 4l8 -4l-4 -2", "key": "svg-1" }], ["path", { "d": "M8 10l-4 2l8 4l8 -4l-4 -2", "key": "svg-2" }]]);
  }
});

// node_modules/@tabler/icons-react/dist/esm/icons/IconStackMiddle.mjs
var IconStackMiddle;
var init_IconStackMiddle = __esm({
  "node_modules/@tabler/icons-react/dist/esm/icons/IconStackMiddle.mjs"() {
    init_createReactComponent();
    IconStackMiddle = createReactComponent("outline", "stack-middle", "IconStackMiddle", [["path", { "d": "M16 10l4 -2l-8 -4l-8 4l4 2", "key": "svg-0" }], ["path", { "d": "M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z", "fill": "currentColor", "key": "svg-1" }], ["path", { "d": "M8 14l-4 2l8 4l8 -4l-4 -2", "key": "svg-2" }]]);
  }
});

// node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs
var IconX;
var init_IconX = __esm({
  "node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs"() {
    init_createReactComponent();
    IconX = createReactComponent("outline", "x", "IconX", [["path", { "d": "M18 6l-12 12", "key": "svg-0" }], ["path", { "d": "M6 6l12 12", "key": "svg-1" }]]);
  }
});

// node_modules/@tabler/icons-react/dist/esm/icons/IconMapPinFilled.mjs
var IconMapPinFilled;
var init_IconMapPinFilled = __esm({
  "node_modules/@tabler/icons-react/dist/esm/icons/IconMapPinFilled.mjs"() {
    init_createReactComponent();
    IconMapPinFilled = createReactComponent("filled", "map-pin-filled", "IconMapPinFilled", [["path", { "d": "M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z", "key": "svg-0" }]]);
  }
});

// node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.mjs
init_IconPencil();
init_IconStackBack();
init_IconStackFront();
init_IconStackMiddle();
init_IconX();
init_IconMapPinFilled();

// src/stories/components/GeofenceModal/GeofenceModal.tsx
var GeofenceModal = ({
  dynamicRate,
  onClose,
  extraContent
}) => {
  const formatHour = (time) => {
    const [hour, , period] = time.split(/[:\s]/);
    return `${hour} ${period}`;
  };
  return /* @__PURE__ */ React2.createElement("article", { className: "geofence-modal" }, /* @__PURE__ */ React2.createElement("div", { className: "geofence-section" }, /* @__PURE__ */ React2.createElement("span", { className: "font-bold" }, "Nombre"), /* @__PURE__ */ React2.createElement("p", { className: "truncate" }, dynamicRate.name)), /* @__PURE__ */ React2.createElement("div", { className: "geofence-section-row" }, /* @__PURE__ */ React2.createElement(IconMapPinFilled, { size: 22 }), /* @__PURE__ */ React2.createElement("p", { className: "geofence-ubication" }, dynamicRate.ubicationName)), /* @__PURE__ */ React2.createElement("div", { className: "geofence-section" }, /* @__PURE__ */ React2.createElement("span", { className: "font-bold" }, "Tarifa inicial"), /* @__PURE__ */ React2.createElement("p", null, "$", dynamicRate.initialRate, " MXN km")), /* @__PURE__ */ React2.createElement("div", { className: "geofence-section" }, /* @__PURE__ */ React2.createElement("span", null, "Tarifa din\xE1mica"), /* @__PURE__ */ React2.createElement("p", null, "$", dynamicRate.pricePerKilometer, " MXN ", /* @__PURE__ */ React2.createElement("span", null, "->"), " ", dynamicRate.kilometers, " km"), /* @__PURE__ */ React2.createElement("p", null, "$", dynamicRate.priceOnDemand, " MXN - ", formatHour(dynamicRate.startHour), " ", "a ", formatHour(dynamicRate.endHour))), /* @__PURE__ */ React2.createElement("div", { className: "geofence-footer" }, /* @__PURE__ */ React2.createElement("div", { className: "geofence-extra-content" }, extraContent), /* @__PURE__ */ React2.createElement("div", { className: "geofence-color-circle" }, /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: "geofence-color-box",
      style: { backgroundColor: dynamicRate.color }
    }
  )), /* @__PURE__ */ React2.createElement("button", { className: "geofence-button-edit" }, /* @__PURE__ */ React2.createElement(IconPencil, { size: 24 })), /* @__PURE__ */ React2.createElement("button", { className: "geofence-button-close", onClick: onClose }, /* @__PURE__ */ React2.createElement(IconX, null))));
};
var GeofenceModal_default = GeofenceModal;
var MapOverlay = ({ position, children }) => {
  const map = useMap();
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  if (!containerRef.current) {
    containerRef.current = document.createElement("div");
    containerRef.current.style.position = "absolute";
  }
  useEffect(() => {
    if (!map || !containerRef.current) return;
    const container = containerRef.current;
    const overlay = new google.maps.OverlayView();
    overlay.onAdd = function() {
      this.getPanes().overlayMouseTarget.appendChild(
        container
      );
    };
    overlay.draw = function() {
      const proj = this.getProjection();
      if (!proj) return;
      const pt = proj.fromLatLngToDivPixel(
        new google.maps.LatLng(position.lat, position.lng)
      );
      if (pt) {
        container.style.left = `${pt.x}px`;
        container.style.top = `${pt.y}px`;
      }
    };
    overlay.onRemove = function() {
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
var ViewPolygon = ({ paths, options }) => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    const polygon = new google.maps.Polygon({ ...options, paths, map });
    return () => polygon.setMap(null);
  }, [map]);
  return null;
};
var EditPolygon = ({
  paths,
  color,
  onPolygonUpdate
}) => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    const mvcPath = new google.maps.MVCArray(
      paths.map((p) => new google.maps.LatLng(p.lat, p.lng))
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
      map
    });
    polygon.setPath(mvcPath);
    const updatePath = () => {
      const updatedPaths = mvcPath.getArray().map((point) => ({
        lat: point.lat(),
        lng: point.lng()
      }));
      onPolygonUpdate?.(updatedPaths);
    };
    google.maps.event.addListener(mvcPath, "set_at", updatePath);
    google.maps.event.addListener(mvcPath, "insert_at", updatePath);
    google.maps.event.addListener(mvcPath, "remove_at", updatePath);
    google.maps.event.addListener(polygon, "rightclick", (e) => {
      const clickedLatLng = e.latLng;
      let closestIndex = -1;
      let minDistance = Infinity;
      mvcPath.forEach((point, index) => {
        const dist = google.maps.geometry.spherical.computeDistanceBetween(
          point,
          clickedLatLng
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
var DrawingManagerComp = ({
  onOverlayComplete
}) => {
  const map = useMap();
  const drawing = useMapsLibrary("drawing");
  useEffect(() => {
    if (!map || !drawing) return;
    const dm = new drawing.DrawingManager({
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: [google.maps.drawing.OverlayType.POLYGON]
      },
      polygonOptions: {
        fillColor: "orange",
        fillOpacity: 0.35,
        strokeWeight: 2,
        strokeColor: "orange",
        clickable: true,
        editable: true,
        zIndex: 1
      }
    });
    dm.setMap(map);
    const listener = google.maps.event.addListener(
      dm,
      "overlaycomplete",
      onOverlayComplete
    );
    return () => {
      google.maps.event.removeListener(listener);
      dm.setMap(null);
    };
  }, [map, drawing]);
  return null;
};
function GeofenceMap({
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
  isLoaded
}) {
  const [selectedGeofence, setSelectedGeofence] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(zoom || 14);
  const [cameraCenter, setCameraCenter] = useState(
    () => {
      const isValid = center && typeof center.lat === "number" && typeof center.lng === "number" && isFinite(center.lat) && isFinite(center.lng);
      return isValid ? center : { lat: 21.491739494411178, lng: -104.89237419696244 };
    }
  );
  useEffect(() => {
    if (center && typeof center.lat === "number" && typeof center.lng === "number" && isFinite(center.lat) && isFinite(center.lng)) {
      setCameraCenter(center);
    }
  }, [center?.lat, center?.lng]);
  useEffect(() => {
    if (zoom !== void 0) setZoomLevel(zoom);
  }, [zoom]);
  if (!isLoaded || typeof google === "undefined") {
    return /* @__PURE__ */ React2.createElement("div", null, "Loading...");
  }
  const handleOverlayComplete = (e) => {
    if (e.type === "polygon") {
      const polygon = e.overlay;
      const getPaths = () => polygon.getPath().getArray().map((point) => ({ lat: point.lat(), lng: point.lng() }));
      const paths = getPaths();
      onPolygonComplete?.(paths);
      google.maps.event.addListener(
        polygon.getPath(),
        "set_at",
        () => onPolygonComplete?.(getPaths())
      );
      google.maps.event.addListener(
        polygon.getPath(),
        "insert_at",
        () => onPolygonComplete?.(getPaths())
      );
      google.maps.event.addListener(
        polygon.getPath(),
        "remove_at",
        () => onPolygonComplete?.(getPaths())
      );
    }
  };
  const getPolygonCenter = (paths) => {
    let lat = 0;
    let lng = 0;
    paths.forEach((point) => {
      lat += point.lat;
      lng += point.lng;
    });
    return { lat: lat / paths.length, lng: lng / paths.length - 2e-3 };
  };
  const getModalCenter = (paths) => {
    let lat = 0;
    let lng = 0;
    paths.forEach((point) => {
      lat += point.lat;
      lng += point.lng;
    });
    return {
      lat: lat / paths.length + 4e-3,
      lng: lng / paths.length + 4e-3
    };
  };
  function groupGeofencesByUbication(rates, threshold = 0.05) {
    if (!rates || rates.length === 0) return [];
    const groups = [];
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
  return /* @__PURE__ */ React2.createElement("div", { style: { height, width } }, /* @__PURE__ */ React2.createElement(
    Map,
    {
      center: cameraCenter,
      zoom: zoomLevel,
      onCenterChanged: (e) => {
        setCameraCenter(e.detail.center);
      },
      onZoomChanged: (e) => {
        setZoomLevel(e.detail.zoom);
      },
      style: { height: "100%", width: "100%" },
      fullscreenControl: false,
      disableDefaultUI: true,
      zoomControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: true
    },
    mode === "view" && singlePolygon && /* @__PURE__ */ React2.createElement(
      ViewPolygon,
      {
        paths: singlePolygon.polygons,
        options: {
          fillColor: singlePolygon.color,
          fillOpacity: 0.35,
          strokeColor: singlePolygon.color,
          strokeOpacity: 0.8,
          strokeWeight: 2
        }
      }
    ),
    mode === "view" && dynamicRates && dynamicRates.map((rate, index) => /* @__PURE__ */ React2.createElement(React2.Fragment, { key: index }, rate.polygons && rate.polygons.length > 0 && /* @__PURE__ */ React2.createElement(
      ViewPolygon,
      {
        paths: rate.polygons,
        options: {
          fillColor: rate.color,
          fillOpacity: 0.35,
          strokeColor: rate.color,
          strokeOpacity: 0.8,
          strokeWeight: 2
        }
      }
    ), zoomLevel > 13 && rate.polygons && rate.polygons.length > 0 && /* @__PURE__ */ React2.createElement(MapOverlay, { position: getPolygonCenter(rate.polygons) }, /* @__PURE__ */ React2.createElement(
      "div",
      {
        onClick: () => setSelectedGeofence(rate),
        className: "truncate",
        style: {
          backgroundColor: rate.color,
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "14px",
          fontWeight: "bold",
          textAlign: "center",
          whiteSpace: "nowrap",
          display: "inline-block",
          cursor: "pointer"
        }
      },
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center"
          }
        },
        /* @__PURE__ */ React2.createElement(
          "div",
          {
            style: {
              display: "flex",
              gap: "1px",
              fontWeight: "normal",
              alignItems: "center",
              justifyContent: "center"
            }
          },
          rate.priority === "principal" ? /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
            IconStackFront,
            {
              size: 25,
              stroke: 1.5,
              color: "white"
            }
          ), /* @__PURE__ */ React2.createElement("span", { className: "text-white" }, "1")) : rate.priority === "secundario" ? /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
            IconStackMiddle,
            {
              size: 25,
              stroke: 1.5,
              color: "white"
            }
          ), /* @__PURE__ */ React2.createElement("span", { className: "text-white" }, "2")) : rate.priority === "terciario" ? /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
            IconStackBack,
            {
              size: 25,
              stroke: 1.5,
              color: "white"
            }
          ), /* @__PURE__ */ React2.createElement("span", { className: "text-white" }, "3")) : null
        ),
        /* @__PURE__ */ React2.createElement("span", null, rate.name)
      )
    )), selectedGeofence && selectedGeofence.polygons && selectedGeofence.polygons.length > 0 && /* @__PURE__ */ React2.createElement(
      MapOverlay,
      {
        position: getModalCenter(selectedGeofence.polygons)
      },
      /* @__PURE__ */ React2.createElement(
        GeofenceModal_default,
        {
          dynamicRate: selectedGeofence,
          onClose: () => setSelectedGeofence(null)
        }
      )
    ))),
    mode === "view" && !singlePolygon && zoomLevel <= 13 && groupGeofencesByUbication(dynamicRates ?? []).map((group, idx) => /* @__PURE__ */ React2.createElement(
      MapOverlay,
      {
        key: `group-${idx}`,
        position: group[0].ubicationCoordinates
      },
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          style: {
            backgroundColor: "orange",
            color: "white",
            padding: "5px 10px",
            borderRadius: "50px",
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "center",
            whiteSpace: "nowrap",
            display: "inline-block"
          }
        },
        group.length
      )
    )),
    mode === "new" && /* @__PURE__ */ React2.createElement(DrawingManagerComp, { onOverlayComplete: handleOverlayComplete }),
    mode === "preview" && createdPolygon && createdPolygon.length > 0 && /* @__PURE__ */ React2.createElement(
      ViewPolygon,
      {
        paths: createdPolygon,
        options: {
          fillColor: "orange",
          fillOpacity: 0.35,
          strokeWeight: 2,
          strokeColor: "orange",
          zIndex: 1
        }
      }
    ),
    mode === "edit" && singlePolygon && singlePolygon.polygons.length > 0 && /* @__PURE__ */ React2.createElement(
      EditPolygon,
      {
        paths: singlePolygon.polygons,
        color: singlePolygon.color,
        onPolygonUpdate
      }
    )
  ));
}
var ColorPicker = ({
  valueColor,
  onChangeColor,
  colors = [
    { name: "Red", color: "red" },
    { name: "Blue", color: "blue" },
    { name: "Green", color: "green" },
    { name: "Yellow", color: "yellow" },
    { name: "Orange", color: "orange" },
    { name: "Purple", color: "purple" },
    { name: "Pink", color: "pink" }
  ]
}) => {
  const [color, setColor] = React2.useState(valueColor || "orange");
  const [openModal, setOpenModal] = React2.useState(false);
  const convertEnglishToSpanishAnyColor = (color2) => {
    const colorMap = {
      red: "Rojo",
      blue: "Azul",
      green: "Verde",
      yellow: "Amarillo",
      orange: "Naranja",
      purple: "P\xFArpura",
      pink: "Rosa"
    };
    return colorMap[color2] || color2;
  };
  const handleHideModalClickOutside = (e) => {
    if (e.target.id === "modal") {
      setOpenModal(false);
    }
  };
  const handleChangeColor = (color2) => {
    setColor(color2);
    onChangeColor ? onChangeColor(color2) : console.log("No function onChangeColor");
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      id: "modal",
      className: "color-picker-container",
      onClick: handleHideModalClickOutside
    },
    /* @__PURE__ */ React2.createElement("div", { className: "color-picker-wrapper" }, /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: "color-picker-circle",
        onClick: () => setOpenModal(!openModal),
        style: { backgroundColor: color }
      }
    )),
    /* @__PURE__ */ React2.createElement("span", { className: "color-picker-label" }, convertEnglishToSpanishAnyColor(color)),
    openModal && /* @__PURE__ */ React2.createElement("div", { className: "color-picker-modal" }, colors.map((c) => /* @__PURE__ */ React2.createElement(
      "div",
      {
        key: c.color,
        className: "color-picker-option",
        style: { backgroundColor: c.color },
        onClick: () => {
          handleChangeColor(c.color);
          setOpenModal(false);
        }
      }
    )))
  );
};
var ColorPicker_default = ColorPicker;
var InputSearch = ({
  value = "",
  onSelectLocation,
  CSS = [],
  isLoaded
}) => {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const places = useMapsLibrary("places");
  const customCSS = [];
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
        console.warn("\u26A0\uFE0F No se pudo obtener la ubicaci\xF3n.");
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
        "neighborhood"
      ];
      const isSpecificAddress = placeTypes.some(
        (type) => nonCityTypes.includes(type)
      );
      const isCity = !isSpecificAddress && (placeTypes.includes("locality") || placeTypes.includes("administrative_area_level_2") || placeTypes.includes("administrative_area_level_1") || placeTypes.includes("country"));
      let name = place.name || "Lugar desconocido";
      if (isCity) {
        const cityComponent = addressComponents.find(
          (component) => component.types.includes("locality") || component.types.includes("administrative_area_level_2")
        );
        if (cityComponent?.long_name) {
          name = cityComponent.long_name;
        }
      }
      const details = {
        name,
        lat,
        lng,
        isCity
      };
      setInputValue(name);
      if (onSelectLocation) onSelectLocation(details);
    });
    return () => {
      google.maps.event.removeListener(listener);
    };
  }, [places]);
  if (!isLoaded || typeof google === "undefined") {
    return /* @__PURE__ */ React2.createElement("div", null, "Cargando buscador de ubicaciones...");
  }
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement(
    "input",
    {
      ref: inputRef,
      className: customCSS.join(" "),
      type: "text",
      value: inputValue,
      onChange: (e) => setInputValue(e.target.value),
      placeholder: "Buscar lugar",
      style: {
        width: "100%",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px"
      }
    }
  ));
};
var InputSeach_default = InputSearch;
/*! Bundled license information:

@tabler/icons-react/dist/esm/defaultAttributes.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)

@tabler/icons-react/dist/esm/createReactComponent.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)

@tabler/icons-react/dist/esm/icons/IconPencil.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)

@tabler/icons-react/dist/esm/icons/IconStackBack.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)

@tabler/icons-react/dist/esm/icons/IconStackFront.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)

@tabler/icons-react/dist/esm/icons/IconStackMiddle.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)

@tabler/icons-react/dist/esm/icons/IconX.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)

@tabler/icons-react/dist/esm/icons/IconMapPinFilled.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)

@tabler/icons-react/dist/esm/tabler-icons-react.mjs:
  (**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

export { ColorPicker_default as ColorPicker, GeofenceMap, GeofenceModal_default as GeofenceModal, InputSeach_default as InputSearch };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map