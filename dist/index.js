import React, { forwardRef, createElement, useState, useRef } from 'react';
import clsx from 'clsx';
import { useLoadScript, GoogleMap, Polygon, OverlayView, DrawingManager } from '@react-google-maps/api';

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
var GeofenceModal = ({ dynamicRate, onClose }) => {
  return /* @__PURE__ */ React.createElement("article", { className: clsx("w-[200px]", "flex", "flex-col", "gap-2") }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx(
        "bg-black",
        "text-white",
        "rounded-[84px]",
        "text-center",
        "py-2"
      )
    },
    /* @__PURE__ */ React.createElement("h2", { className: clsx("font-bold", "text-[13px]") }, "Nombre"),
    /* @__PURE__ */ React.createElement("p", { className: clsx("text-[12px]") }, dynamicRate.name)
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx(
        "flex",
        "gap-4",
        "py-1",
        "justify-center",
        "bg-black",
        "text-white",
        "text-[13px]",
        "rounded-2xl",
        "text-center",
        "items-center"
      )
    },
    /* @__PURE__ */ React.createElement(IconMapPinFilled, { size: 22 }),
    /* @__PURE__ */ React.createElement("p", { className: clsx("text-[14px]") }, dynamicRate.ubicationName)
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx(
        "bg-black",
        "rounded-2xl",
        "py-2",
        "text-white",
        "text-center"
      )
    },
    /* @__PURE__ */ React.createElement("h2", { className: clsx("font-bold", "text-[13px]") }, "Tarifa inicial"),
    /* @__PURE__ */ React.createElement("p", { className: clsx("text-[12px]") }, "$", dynamicRate.initialRate, " MXN km")
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx(
        "bg-black",
        "py-2",
        "text-white",
        "rounded-[1.5rem]",
        "text-center",
        "flex",
        "flex-col",
        "gap-1"
      )
    },
    /* @__PURE__ */ React.createElement("h2", { className: clsx("font-bold", "text-[13px]") }, "Tarifa din\xE1mica"),
    /* @__PURE__ */ React.createElement("p", { className: clsx("text-[12px]") }, "$", dynamicRate.pricePerKilometer, " MXN ", /* @__PURE__ */ React.createElement("span", null, "->"), " ", dynamicRate.kilometers, " km"),
    /* @__PURE__ */ React.createElement("p", { className: clsx("text-[12px]") }, "$50 MXN - 9PM a 5AM")
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: clsx(
        "flex",
        "gap-1",
        "justify-between",
        "h-[40px]",
        "w-full"
      )
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: clsx(
          "bg-black",
          "flex",
          "items-center",
          "justify-center",
          "w-[60px]",
          "rounded-[50px]"
        )
      }
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: clsx(
          "bg-black",
          "p-1",
          "rounded-full",
          "flex",
          "items-center"
        )
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: clsx("w-[30px]", "h-[30px]", "rounded-full"),
          style: { backgroundColor: dynamicRate.color }
        }
      )
    ),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        className: clsx(
          "bg-black",
          "w-[40px]",
          "text-white",
          "flex",
          "items-center",
          "justify-center",
          "rounded-full"
        )
      },
      /* @__PURE__ */ React.createElement(IconEdit, { size: 24 })
    ),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        className: clsx(
          "bg-gray-900/60",
          "w-[40px]",
          "rounded-full",
          "flex",
          "items-center",
          "justify-center",
          "text-white"
        ),
        onClick: onClose
      },
      /* @__PURE__ */ React.createElement(IconX, null)
    )
  ));
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
  const [selectedGeofence, setSelectedGeofence] = useState(null);
  const [newPaths, setNewPaths] = useState([]);
  const polygonRef = useRef(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDZ2gn0lNxRo4x6fsg6ne9oNoMT9mDMDAo",
    libraries
  });
  if (!isLoaded) return /* @__PURE__ */ React.createElement("div", null, "Loading Map...");
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    GoogleMap,
    {
      center: center || { lat: 21.4905, lng: -104.88508 },
      zoom: zoom || 14,
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
    mode === "view" && singlePolygon && /* @__PURE__ */ React.createElement(
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
    mode === "view" && dynamicRates && dynamicRates.map((rate, index) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      Polygon,
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
    ), /* @__PURE__ */ React.createElement(
      OverlayView,
      {
        position: getPolygonCenter(rate.polygons),
        mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
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
        /* @__PURE__ */ React.createElement("span", null, rate.name)
      ))
    ), selectedGeofence && /* @__PURE__ */ React.createElement(
      OverlayView,
      {
        position: getModalCenter(selectedGeofence.polygons),
        mapPaneName: OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React.createElement(
        GeofenceModal_default,
        {
          dynamicRate: selectedGeofence,
          onClose: () => setSelectedGeofence(null)
        }
      )
    ))),
    mode === "new" && /* @__PURE__ */ React.createElement(
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
    mode === "preview" && createdPolygon && /* @__PURE__ */ React.createElement(
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
    mode === "edit" && singlePolygon && /* @__PURE__ */ React.createElement(
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

export { GeofenceMap, GeofenceModal_default as GeofenceModal };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map