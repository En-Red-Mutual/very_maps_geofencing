'use strict';

var React3 = require('react');
var api = require('@react-google-maps/api');
var iconsReact = require('@tabler/icons-react');
var clsx = require('clsx');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React3__default = /*#__PURE__*/_interopDefault(React3);
var clsx__default = /*#__PURE__*/_interopDefault(clsx);

var LocationSearch = ({
  onPlaceSelect,
  otherStyles,
  value
}) => {
  const [searchInput, setSearchInput] = React3.useState(value || "");
  const autocompleteRef = React3.useRef(null);
  React3.useEffect(() => {
    setSearchInput(value || "");
  }, [value]);
  const handlePlaceSelect = (place) => {
    if (place && place.formatted_address) {
      setSearchInput(place.name || place.formatted_address);
    }
    onPlaceSelect(place);
  };
  return /* @__PURE__ */ React3__default.default.createElement(
    api.LoadScript,
    {
      googleMapsApiKey: "AIzaSyDZ2gn0lNxRo4x6fsg6ne9oNoMT9mDMDAo",
      libraries: ["places"]
    },
    /* @__PURE__ */ React3__default.default.createElement(
      api.Autocomplete,
      {
        onLoad: (autocomplete) => {
          autocompleteRef.current = autocomplete;
          console.log("Autocomplete loaded:", autocomplete);
        },
        onPlaceChanged: () => {
          if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            handlePlaceSelect(place);
          }
        }
      },
      /* @__PURE__ */ React3__default.default.createElement(
        "input",
        {
          type: "text",
          placeholder: "Search for a place",
          value: searchInput,
          className: `rounded-md p-2 focus:outline-none ${otherStyles}`,
          onChange: (e) => setSearchInput(e.target.value)
        }
      )
    )
  );
};
var LocationSearch_default = LocationSearch;
var Switch = ({ initialOn, onToggle }) => {
  const [isChecked, setIsChecked] = React3.useState(initialOn);
  React3.useEffect(() => {
    setIsChecked(initialOn);
  }, [initialOn]);
  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };
  return /* @__PURE__ */ React3__default.default.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React3__default.default.createElement("label", { htmlFor: "toggle", className: "flex items-center cursor-pointer" }, /* @__PURE__ */ React3__default.default.createElement("div", { className: "relative" }, /* @__PURE__ */ React3__default.default.createElement(
    "input",
    {
      id: "toggle",
      type: "checkbox",
      className: "hidden",
      checked: isChecked,
      onChange: toggleSwitch
    }
  ), /* @__PURE__ */ React3__default.default.createElement("div", { className: `toggle-line w-10 h-5 ${isChecked ? "bg-orange-400" : "bg-gray-400"} rounded-full shadow-inner` }), /* @__PURE__ */ React3__default.default.createElement("div", { className: `toggle-dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-1 top-[2px] transition-transform duration-300 ${isChecked ? "translate-x-full" : ""}` }))));
};
var Switch_default = Switch;
var GeofenceModal = ({ dynamicRate, onClose }) => {
  return /* @__PURE__ */ React3__default.default.createElement("article", { className: clsx__default.default("w-[200px]", "flex", "flex-col", "gap-2") }, /* @__PURE__ */ React3__default.default.createElement("div", { className: clsx__default.default("bg-black", "text-white", "rounded-[84px]", "text-center", "py-2") }, /* @__PURE__ */ React3__default.default.createElement("h2", { className: clsx__default.default("font-bold", "text-[13px]") }, "Nombre"), /* @__PURE__ */ React3__default.default.createElement("p", { className: clsx__default.default("text-[12px]") }, dynamicRate.name)), /* @__PURE__ */ React3__default.default.createElement("div", { className: clsx__default.default("flex", "gap-4", "py-1", "justify-center", "bg-black", "text-white", "text-[13px]", "rounded-2xl", "text-center", "items-center") }, /* @__PURE__ */ React3__default.default.createElement(iconsReact.IconMapPinFilled, { size: 22 }), /* @__PURE__ */ React3__default.default.createElement("p", { className: clsx__default.default("text-[14px]") }, dynamicRate.ubicationName)), /* @__PURE__ */ React3__default.default.createElement("div", { className: clsx__default.default("bg-black", "rounded-2xl", "py-2", "text-white", "text-center") }, /* @__PURE__ */ React3__default.default.createElement("h2", { className: clsx__default.default("font-bold", "text-[13px]") }, "Tarifa inicial"), /* @__PURE__ */ React3__default.default.createElement("p", { className: clsx__default.default("text-[12px]") }, "$", dynamicRate.initialRate, " MXN km")), /* @__PURE__ */ React3__default.default.createElement("div", { className: clsx__default.default("bg-black", "py-2", "text-white", "rounded-[1.5rem]", "text-center", "flex", "flex-col", "gap-1") }, /* @__PURE__ */ React3__default.default.createElement("h2", { className: clsx__default.default("font-bold", "text-[13px]") }, "Tarifa din\xE1mica"), /* @__PURE__ */ React3__default.default.createElement("p", { className: clsx__default.default("text-[12px]") }, "$", dynamicRate.pricePerKilometer, " MXN ", /* @__PURE__ */ React3__default.default.createElement("span", null, "->"), " ", dynamicRate.kilometers, " km"), /* @__PURE__ */ React3__default.default.createElement("p", { className: clsx__default.default("text-[12px]") }, "$50 MXN - 9PM a 5AM")), /* @__PURE__ */ React3__default.default.createElement("div", { className: clsx__default.default("flex", "gap-1", "justify-between", "h-[40px]", "w-full") }, /* @__PURE__ */ React3__default.default.createElement("div", { className: clsx__default.default("bg-black", "flex", "items-center", "justify-center", "w-[60px]", "rounded-[50px]") }, /* @__PURE__ */ React3__default.default.createElement(Switch_default, { initialOn: dynamicRate.isActivate || false })), /* @__PURE__ */ React3__default.default.createElement("div", { className: clsx__default.default("bg-black", "p-1", "rounded-full", "flex", "items-center") }, /* @__PURE__ */ React3__default.default.createElement(
    "div",
    {
      className: clsx__default.default("w-[30px]", "h-[30px]", "rounded-full"),
      style: { backgroundColor: dynamicRate.color }
    }
  )), /* @__PURE__ */ React3__default.default.createElement("button", { className: clsx__default.default("bg-black", "w-[40px]", "text-white", "flex", "items-center", "justify-center", "rounded-full") }, /* @__PURE__ */ React3__default.default.createElement(iconsReact.IconEdit, { size: 24 })), /* @__PURE__ */ React3__default.default.createElement("button", { className: clsx__default.default("bg-gray-900/60", "w-[40px]", "rounded-full", "flex", "items-center", "justify-center", "text-white"), onClick: onClose }, /* @__PURE__ */ React3__default.default.createElement(iconsReact.IconX, null))));
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
  const [selectedGeofence, setSelectedGeofence] = React3.useState(null);
  const [newPaths, setNewPaths] = React3.useState([]);
  const polygonRef = React3.useRef(null);
  const { isLoaded } = api.useLoadScript({
    googleMapsApiKey: "AIzaSyDZ2gn0lNxRo4x6fsg6ne9oNoMT9mDMDAo",
    libraries
  });
  if (!isLoaded) return /* @__PURE__ */ React3__default.default.createElement("div", null, "Loading Map...");
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
  return /* @__PURE__ */ React3__default.default.createElement("div", null, /* @__PURE__ */ React3__default.default.createElement(
    api.GoogleMap,
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
    mode === "view" && singlePolygon && /* @__PURE__ */ React3__default.default.createElement(
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
    mode === "view" && dynamicRates && dynamicRates.map((rate, index) => /* @__PURE__ */ React3__default.default.createElement(React3__default.default.Fragment, null, /* @__PURE__ */ React3__default.default.createElement(
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
    ), /* @__PURE__ */ React3__default.default.createElement(
      api.OverlayView,
      {
        position: getPolygonCenter(rate.polygons),
        mapPaneName: api.OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React3__default.default.createElement(React3__default.default.Fragment, null, /* @__PURE__ */ React3__default.default.createElement(
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
        /* @__PURE__ */ React3__default.default.createElement("span", null, rate.name)
      ))
    ), selectedGeofence && /* @__PURE__ */ React3__default.default.createElement(
      api.OverlayView,
      {
        position: getModalCenter(selectedGeofence.polygons),
        mapPaneName: api.OverlayView.OVERLAY_MOUSE_TARGET
      },
      /* @__PURE__ */ React3__default.default.createElement(
        GeofenceModal_default,
        {
          dynamicRate: selectedGeofence,
          onClose: () => setSelectedGeofence(null)
        }
      )
    ))),
    mode === "new" && /* @__PURE__ */ React3__default.default.createElement(
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
    mode === "preview" && createdPolygon && /* @__PURE__ */ React3__default.default.createElement(
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
    mode === "edit" && singlePolygon && /* @__PURE__ */ React3__default.default.createElement(
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

exports.GeofenceMap = GeofenceMap;
exports.GeofenceModal = GeofenceModal_default;
exports.LocationSearch = LocationSearch_default;
exports.Switch = Switch_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map