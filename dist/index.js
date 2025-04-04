import React2, { forwardRef, createElement, useState, useRef, useEffect } from 'react';
import { GoogleMap, Polygon, OverlayView, DrawingManager, Autocomplete } from '@react-google-maps/api';

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

// node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs
var IconEdit;
var init_IconEdit = __esm({
  "node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs"() {
    init_createReactComponent();
    IconEdit = createReactComponent("outline", "edit", "IconEdit", [["path", { "d": "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1", "key": "svg-0" }], ["path", { "d": "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z", "key": "svg-1" }], ["path", { "d": "M16 5l3 3", "key": "svg-2" }]]);
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
init_IconEdit();
init_IconStackBack();
init_IconStackFront();
init_IconStackMiddle();
init_IconX();
init_IconMapPinFilled();

// src/stories/components/GeofenceModal/GeofenceModal.tsx
var GeofenceModal = ({ dynamicRate, onClose }) => {
  return /* @__PURE__ */ React2.createElement(
    "article",
    {
      style: {
        width: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }
    },
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        style: {
          backgroundColor: "black",
          color: "white",
          borderRadius: "84px",
          textAlign: "center",
          padding: "1px"
        }
      },
      /* @__PURE__ */ React2.createElement("h2", { style: { fontWeight: "bold", fontSize: "13px" } }, "Nombre"),
      /* @__PURE__ */ React2.createElement("p", { style: { fontSize: "12px" } }, dynamicRate.name)
    ),
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        style: {
          display: "flex",
          gap: "4px",
          padding: "3px 0px",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          fontSize: "13px",
          borderRadius: "84px",
          textAlign: "center",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React2.createElement(IconMapPinFilled, { size: 22 }),
      /* @__PURE__ */ React2.createElement("p", { style: { fontSize: "14px" } }, dynamicRate.ubicationName)
    ),
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        style: {
          backgroundColor: "black",
          borderRadius: "2rem",
          padding: "1px",
          color: "white",
          textAlign: "center"
        }
      },
      /* @__PURE__ */ React2.createElement("h2", { style: { fontWeight: "bold", fontSize: "13px" } }, "Tarifa inicial"),
      /* @__PURE__ */ React2.createElement("p", { style: { fontSize: "12px" } }, "$", dynamicRate.initialRate, " MXN km")
    ),
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        style: {
          backgroundColor: "black",
          borderRadius: "2rem",
          padding: "1px",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1px"
        }
      },
      /* @__PURE__ */ React2.createElement("h2", { style: { fontWeight: "bold", fontSize: "13px" } }, "Tarifa din\xE1mica"),
      /* @__PURE__ */ React2.createElement("p", { style: { fontSize: "12px" } }, "$", dynamicRate.pricePerKilometer, " MXN ", /* @__PURE__ */ React2.createElement("span", null, "->"), " ", dynamicRate.kilometers, " km"),
      /* @__PURE__ */ React2.createElement("p", { style: { fontSize: "12px" } }, "$50 MXN - 9PM a 5AM")
    ),
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        style: {
          display: "flex",
          gap: "1px",
          justifyContent: "space-between",
          height: "40px",
          width: "100%"
        }
      },
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          style: {
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            borderRadius: "50px"
          }
        }
      ),
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          style: {
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            borderRadius: "50px",
            padding: "4px"
          }
        },
        /* @__PURE__ */ React2.createElement(
          "div",
          {
            style: {
              backgroundColor: dynamicRate.color,
              width: "30px",
              height: "30px",
              borderRadius: "50%"
            }
          }
        )
      ),
      /* @__PURE__ */ React2.createElement(
        "button",
        {
          style: {
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            borderRadius: "50px",
            color: "white"
          }
        },
        /* @__PURE__ */ React2.createElement(IconEdit, { size: 24 })
      ),
      /* @__PURE__ */ React2.createElement(
        "button",
        {
          style: {
            backgroundColor: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            borderRadius: "50px",
            color: "white"
          },
          onClick: onClose
        },
        /* @__PURE__ */ React2.createElement(IconX, null)
      )
    )
  );
};
var GeofenceModal_default = GeofenceModal;
function GeofenceMap({
  dynamicRates,
  mode,
  singlePolygon,
  center,
  defaultCenter,
  onPolygonUpdate,
  onPolygonComplete,
  createdPolygon,
  height,
  width,
  zoom,
  isLoaded
}) {
  const [selectedGeofence, setSelectedGeofence] = useState(null);
  const [newPaths, setNewPaths] = useState([]);
  const polygonRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(zoom || 14);
  const handleZoomChanged = (map) => {
    setZoomLevel(map.getZoom());
  };
  console.log(defaultCenter);
  if (!isLoaded || typeof google === "undefined") {
    return /* @__PURE__ */ React2.createElement("div", null, "Loading...");
  }
  const getPolygonPaths = (polygon) => {
    const paths = polygon.getPath().getArray().map((point) => ({ lat: point.lat(), lng: point.lng() }));
    setNewPaths(paths);
    onPolygonComplete && onPolygonComplete(paths);
  };
  const handleOverlayComplete = (e) => {
    if (e.type === "polygon") {
      const polygon = e.overlay;
      polygonRef.current = polygon;
      getPolygonPaths(polygon);
      google.maps.event.addListener(
        polygon.getPath(),
        "set_at",
        () => getPolygonPaths(polygon)
      );
      google.maps.event.addListener(
        polygon.getPath(),
        "insert_at",
        () => getPolygonPaths(polygon)
      );
      google.maps.event.addListener(
        polygon.getPath(),
        "remove_at",
        () => getPolygonPaths(polygon)
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
    return {
      lat: lat / paths.length,
      lng: lng / paths.length - 2e-3
    };
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
  const isValidLatLng = (coord) => coord && typeof coord.lat === "number" && typeof coord.lng === "number" && isFinite(coord.lat) && isFinite(coord.lng);
  const mapCenter = isValidLatLng(center) ? center : { lat: 21.491739494411178, lng: -104.89237419696244 };
  function groupGeofencesByUbication(rates, threshold = 0.05) {
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
  console.log("newPaths", newPaths);
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement(
    GoogleMap,
    {
      center: mapCenter,
      zoom: zoomLevel,
      onLoad: (map) => {
        map.addListener("zoom_changed", () => handleZoomChanged(map));
      },
      mapContainerStyle: { height, width },
      options: {
        fullscreenControl: false,
        disableDefaultUI: true,
        zoomControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: true
      }
    },
    mode === "view" && singlePolygon && /* @__PURE__ */ React2.createElement(
      Polygon,
      {
        path: singlePolygon.polygons,
        options: {
          fillColor: singlePolygon.color,
          fillOpacity: 0.35,
          strokeColor: singlePolygon.color,
          strokeOpacity: 0.8,
          strokeWeight: 2
        }
      }
    ),
    mode === "view" && dynamicRates && dynamicRates.map((rate, index) => /* @__PURE__ */ React2.createElement(React2.Fragment, { key: index }, /* @__PURE__ */ React2.createElement(
      Polygon,
      {
        path: rate.polygons,
        options: {
          fillColor: rate.color,
          fillOpacity: 0.35,
          strokeColor: rate.color,
          strokeOpacity: 0.8,
          strokeWeight: 2
        }
      }
    ), zoomLevel > 13 && /* @__PURE__ */ React2.createElement(
      OverlayView,
      {
        position: getPolygonCenter(rate.polygons),
        mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React2.createElement(
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
            display: "inline-block"
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
      )
    ), selectedGeofence && /* @__PURE__ */ React2.createElement(
      OverlayView,
      {
        position: getModalCenter(selectedGeofence.polygons),
        mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React2.createElement(
        GeofenceModal_default,
        {
          dynamicRate: selectedGeofence,
          onClose: () => setSelectedGeofence(null)
        }
      )
    ))),
    mode === "view" && zoomLevel <= 13 && groupGeofencesByUbication(dynamicRates).map((group, idx) => /* @__PURE__ */ React2.createElement(
      OverlayView,
      {
        key: `group-${idx}`,
        position: group[0].ubicationCoordinates,
        mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET
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
    mode === "new" && isLoaded && typeof google.maps?.drawing?.OverlayType !== "undefined" && /* @__PURE__ */ React2.createElement(
      DrawingManager,
      {
        options: {
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
        },
        onOverlayComplete: handleOverlayComplete
      }
    ),
    mode === "preview" && createdPolygon && /* @__PURE__ */ React2.createElement(
      Polygon,
      {
        path: createdPolygon,
        options: {
          fillColor: "orange",
          fillOpacity: 0.35,
          strokeWeight: 2,
          strokeColor: "orange",
          zIndex: 1
        }
      }
    ),
    mode === "edit" && singlePolygon && /* @__PURE__ */ React2.createElement(
      Polygon,
      {
        path: singlePolygon.polygons,
        options: {
          fillColor: singlePolygon.color,
          fillOpacity: 0.35,
          strokeColor: singlePolygon.color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          clickable: true,
          editable: true,
          zIndex: 1
        },
        onLoad: (polygon) => {
          polygonRef.current = polygon;
        },
        onMouseUp: () => {
          if (polygonRef.current) {
            const updatedPaths = polygonRef.current.getPath().getArray().map((point) => ({
              lat: point.lat(),
              lng: point.lng()
            }));
            setNewPaths(updatedPaths);
            onPolygonUpdate && onPolygonUpdate(updatedPaths);
          }
        },
        onDragEnd: () => {
          if (polygonRef.current) {
            const updatedPaths = polygonRef.current.getPath().getArray().map((point) => ({
              lat: point.lat(),
              lng: point.lng()
            }));
            setNewPaths(updatedPaths);
            onPolygonUpdate && onPolygonUpdate(updatedPaths);
          }
        }
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
    console.log(color2);
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
      onClick: handleHideModalClickOutside,
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        width: "25%",
        gap: "10px"
      }
    },
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        style: {
          backgroundColor: "lightgray",
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          onClick: () => setOpenModal(!openModal),
          style: {
            backgroundColor: color,
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            margin: "0 auto",
            cursor: "pointer"
          }
        }
      )
    ),
    /* @__PURE__ */ React2.createElement(
      "span",
      {
        style: {
          fontWeight: "bold"
        }
      },
      convertEnglishToSpanishAnyColor(color)
    ),
    openModal && /* @__PURE__ */ React2.createElement(
      "div",
      {
        style: {
          position: "absolute",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
          gap: "5px",
          padding: "5px",
          borderRadius: "5px"
        }
      },
      colors.map((color2) => /* @__PURE__ */ React2.createElement(
        "div",
        {
          style: {
            backgroundColor: color2.color,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            margin: "0 auto",
            cursor: "pointer"
          },
          onClick: () => {
            handleChangeColor(color2.color);
            setOpenModal(false);
          }
        }
      ))
    )
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
  const autocompleteRef = useRef(null);
  const inputRef = useRef(null);
  const customCSS = [];
  if (CSS.length > 0) customCSS.push(CSS.join(" "));
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
      const details = { name, lat, lng };
      setInputValue(name);
      if (onSelectLocation) {
        onSelectLocation(details);
      }
      console.log("\u{1F4CD} Lugar seleccionado:", details);
    } else {
      console.warn(
        "\u26A0\uFE0F No se pudo obtener la ubicaci\xF3n del lugar seleccionado."
      );
    }
  };
  if (!isLoaded || typeof google === "undefined") {
    return /* @__PURE__ */ React2.createElement("div", null, "Cargando buscador de ubicaciones...");
  }
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement(
    Autocomplete,
    {
      onLoad: (autocomplete) => autocompleteRef.current = autocomplete,
      onPlaceChanged: handlePlaceChanged
    },
    /* @__PURE__ */ React2.createElement(
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
    )
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

@tabler/icons-react/dist/esm/icons/IconEdit.mjs:
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