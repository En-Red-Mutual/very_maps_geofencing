'use strict';

var React = require('react');
var api = require('@react-google-maps/api');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

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
      const Component = React.forwardRef(
        ({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref) => React.createElement(
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
            title && React.createElement("title", { key: "svg-title" }, title),
            ...iconNode.map(([tag, attrs]) => React.createElement(tag, attrs)),
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
init_IconX();
init_IconMapPinFilled();

// src/stories/components/GeofenceModal/GeofenceModal.tsx
var GeofenceModal = ({ dynamicRate, onClose }) => {
  return /* @__PURE__ */ React__default.default.createElement(
    "article",
    {
      style: {
        width: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }
    },
    /* @__PURE__ */ React__default.default.createElement(
      "div",
      {
        style: {
          backgroundColor: "black",
          color: "white",
          borderRadius: "84px",
          textAlign: "center",
          padding: "2px"
        }
      },
      /* @__PURE__ */ React__default.default.createElement("h2", { style: { fontWeight: "bold", fontSize: "13px" } }, "Nombre"),
      /* @__PURE__ */ React__default.default.createElement("p", { style: { fontSize: "12px" } }, dynamicRate.name)
    ),
    /* @__PURE__ */ React__default.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          gap: "4px",
          padding: "6px 0px",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          fontSize: "13px",
          borderRadius: "84px",
          textAlign: "center",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React__default.default.createElement(IconMapPinFilled, { size: 22 }),
      /* @__PURE__ */ React__default.default.createElement("p", { style: { fontSize: "14px" } }, dynamicRate.ubicationName)
    ),
    /* @__PURE__ */ React__default.default.createElement(
      "div",
      {
        style: {
          backgroundColor: "black",
          borderRadius: "2rem",
          padding: "2px",
          color: "white",
          textAlign: "center"
        }
      },
      /* @__PURE__ */ React__default.default.createElement("h2", { style: { fontWeight: "bold", fontSize: "13px" } }, "Tarifa inicial"),
      /* @__PURE__ */ React__default.default.createElement("p", { style: { fontSize: "12px" } }, "$", dynamicRate.initialRate, " MXN km")
    ),
    /* @__PURE__ */ React__default.default.createElement(
      "div",
      {
        style: {
          backgroundColor: "black",
          borderRadius: "2rem",
          padding: "2px",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1px"
        }
      },
      /* @__PURE__ */ React__default.default.createElement("h2", { style: { fontWeight: "bold", fontSize: "13px" } }, "Tarifa din\xE1mica"),
      /* @__PURE__ */ React__default.default.createElement("p", { style: { fontSize: "12px" } }, "$", dynamicRate.pricePerKilometer, " MXN ", /* @__PURE__ */ React__default.default.createElement("span", null, "->"), " ", dynamicRate.kilometers, " km"),
      /* @__PURE__ */ React__default.default.createElement("p", { style: { fontSize: "12px" } }, "$50 MXN - 9PM a 5AM")
    ),
    /* @__PURE__ */ React__default.default.createElement(
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
      /* @__PURE__ */ React__default.default.createElement(
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
      /* @__PURE__ */ React__default.default.createElement(
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
        /* @__PURE__ */ React__default.default.createElement(
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
      /* @__PURE__ */ React__default.default.createElement(
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
        /* @__PURE__ */ React__default.default.createElement(IconEdit, { size: 24 })
      ),
      /* @__PURE__ */ React__default.default.createElement(
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
        /* @__PURE__ */ React__default.default.createElement(IconX, null)
      )
    )
  );
};
var GeofenceModal_default = GeofenceModal;
var libraries = ["drawing", "places"];
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
  zoom
}) {
  const [selectedGeofence, setSelectedGeofence] = React.useState(null);
  const [newPaths, setNewPaths] = React.useState([]);
  const polygonRef = React.useRef(null);
  const [zoomLevel, setZoomLevel] = React.useState(zoom || 14);
  const handleZoomChanged = (map) => {
    setZoomLevel(map.getZoom());
  };
  const { isLoaded } = api.useLoadScript({
    googleMapsApiKey: "AIzaSyDZ2gn0lNxRo4x6fsg6ne9oNoMT9mDMDAo",
    libraries
  });
  if (!isLoaded) return /* @__PURE__ */ React__default.default.createElement("div", null, "Loading Map...");
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
  console.log("newPaths", newPaths);
  return /* @__PURE__ */ React__default.default.createElement("div", null, /* @__PURE__ */ React__default.default.createElement(
    api.GoogleMap,
    {
      center: center || { lat: 21.4905, lng: -104.88508 },
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
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        }
      }
    },
    mode === "view" && singlePolygon && /* @__PURE__ */ React__default.default.createElement(
      api.Polygon,
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
    mode === "view" && dynamicRates && dynamicRates.map((rate, index) => /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement(
      api.Polygon,
      {
        key: index,
        path: rate.polygons,
        options: {
          fillColor: rate.color,
          fillOpacity: 0.35,
          strokeColor: rate.color,
          strokeOpacity: 0.8,
          strokeWeight: 2
        }
      }
    ), zoomLevel > 13 ? /* @__PURE__ */ React__default.default.createElement(
      api.OverlayView,
      {
        position: getPolygonCenter(rate.polygons),
        mapPaneName: api.OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement(
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
        /* @__PURE__ */ React__default.default.createElement("span", null, rate.name)
      ))
    ) : index === 0 && /* @__PURE__ */ React__default.default.createElement(
      api.OverlayView,
      {
        position: getPolygonCenter(rate.polygons),
        mapPaneName: api.OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React__default.default.createElement(
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
        `${dynamicRates.length}`
      )
    ), selectedGeofence && /* @__PURE__ */ React__default.default.createElement(
      api.OverlayView,
      {
        position: getModalCenter(selectedGeofence.polygons),
        mapPaneName: api.OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React__default.default.createElement(
        GeofenceModal_default,
        {
          dynamicRate: selectedGeofence,
          onClose: () => setSelectedGeofence(null)
        }
      )
    ))),
    mode === "new" && /* @__PURE__ */ React__default.default.createElement(
      api.DrawingManager,
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
    mode === "preview" && createdPolygon && /* @__PURE__ */ React__default.default.createElement(
      api.Polygon,
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
    mode === "edit" && singlePolygon && /* @__PURE__ */ React__default.default.createElement(
      api.Polygon,
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
          // Permitir edición
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
            console.log("Updated Polygon Paths (onMouseUp):", updatedPaths);
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
            console.log("Updated Polygon Paths (onDragEnd):", updatedPaths);
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
  const [color, setColor] = React__default.default.useState(valueColor || "orange");
  const [openModal, setOpenModal] = React__default.default.useState(false);
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
  return /* @__PURE__ */ React__default.default.createElement(
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
    /* @__PURE__ */ React__default.default.createElement(
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
      /* @__PURE__ */ React__default.default.createElement(
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
    /* @__PURE__ */ React__default.default.createElement(
      "span",
      {
        style: {
          fontWeight: "bold"
        }
      },
      convertEnglishToSpanishAnyColor(color)
    ),
    openModal && /* @__PURE__ */ React__default.default.createElement(
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
      colors.map((color2) => /* @__PURE__ */ React__default.default.createElement(
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

exports.ColorPicker = ColorPicker_default;
exports.GeofenceMap = GeofenceMap;
exports.GeofenceModal = GeofenceModal_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map