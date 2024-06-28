'use strict';

var api = require('@react-google-maps/api');
var React2 = require('react');
var iconsReact = require('@tabler/icons-react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React2__default = /*#__PURE__*/_interopDefault(React2);

var Switch = ({ initialOn, onToggle }) => {
  const [isChecked, setIsChecked] = React2.useState(initialOn);
  React2.useEffect(() => {
    setIsChecked(initialOn);
  }, [initialOn]);
  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };
  return /* @__PURE__ */ React2__default.default.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React2__default.default.createElement("label", { htmlFor: "toggle", className: "flex items-center cursor-pointer" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "relative" }, /* @__PURE__ */ React2__default.default.createElement(
    "input",
    {
      id: "toggle",
      type: "checkbox",
      className: "hidden",
      checked: isChecked,
      onChange: toggleSwitch
    }
  ), /* @__PURE__ */ React2__default.default.createElement("div", { className: `toggle-line w-10 h-5 ${isChecked ? "bg-orange-400" : "bg-gray-400"} rounded-full shadow-inner` }), /* @__PURE__ */ React2__default.default.createElement("div", { className: `toggle-dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-1 top-[2px] transition-transform duration-300 ${isChecked ? "translate-x-full" : ""}` }))));
};
var Switch_default = Switch;

// src/stories/components/GeofenceModal/GeofenceModal.tsx
var GeofenceModal = ({ geofence, onClose }) => {
  return /* @__PURE__ */ React2__default.default.createElement("div", { className: "w-[200px] flex flex-col gap-2" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black text-white rounded-[5rem] text-center py-2" }, /* @__PURE__ */ React2__default.default.createElement("h2", { className: "font-bold text-[13px]" }, "Nombre"), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[12px]" }, geofence.geofenceName)), /* @__PURE__ */ React2__default.default.createElement("div", { className: "flex gap-4 py-1 justify-center bg-black text-white text-[13px] rounded-2xl text-center items-center" }, /* @__PURE__ */ React2__default.default.createElement(iconsReact.IconMapPinFilled, { size: 22 }), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[14px]" }, geofence.geofenceLocation)), /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black rounded-2xl py-2 text-white text-center" }, /* @__PURE__ */ React2__default.default.createElement("h2", { className: "font-bold text-[13px]" }, "Tarifa inicial"), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[12px]" }, "$", geofence.initialRate, " MXN km")), /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black py-2 text-white rounded-[1.5rem] text-center flex flex-col gap-1 " }, /* @__PURE__ */ React2__default.default.createElement("h2", { className: "font-bold text-[13px]" }, "Tarifa dinamica"), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[12px]" }, "$", geofence.dynamicRateMinPrice, " MXN ", /* @__PURE__ */ React2__default.default.createElement("span", null, "->"), " ", geofence.dynamicRateMaxDistance, " km"), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[12px]" }, "$50 MXN - 9PM a 5AM")), /* @__PURE__ */ React2__default.default.createElement("div", { className: "flex gap-1 justify-between h-[40px] w-full" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black flex items-center justify-center w-[60px] rounded-[50px]" }, /* @__PURE__ */ React2__default.default.createElement(Switch_default, { initialOn: geofence.on || false })), /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black p-1 rounded-[50%] flex items-center" }, /* @__PURE__ */ React2__default.default.createElement("div", { style: { backgroundColor: geofence.geofenceColor }, className: `w-[30px] h-[30px] rounded-[50%]` })), /* @__PURE__ */ React2__default.default.createElement("button", { className: "bg-black w-[40px] text-white flex items-center justify-center rounded-[50%]" }, /* @__PURE__ */ React2__default.default.createElement(iconsReact.IconEdit, { size: 24 })), /* @__PURE__ */ React2__default.default.createElement("button", { className: "bg-gray-900/60 w-[40px] rounded-[50%] flex items-center justify-center text-white", onClick: onClose }, /* @__PURE__ */ React2__default.default.createElement(iconsReact.IconX, null))));
};
var GeofenceModal_default = GeofenceModal;

// src/stories/components/Mapa/Map.tsx
var Map = ({ geofences = [], zoom = 15, height = "50vh", width = "50vh", mode = "view", searchQuery, onPolygonComplete }) => {
  const [searchLocation, setSearchedLocation] = React2.useState(null);
  const [currentPolygon, setCurrentPolygon] = React2.useState([]);
  const [selectedGeofence, setSelectedGeofence] = React2.useState(null);
  const defaultCenter = {
    lat: 21.490499199707944,
    lng: -104.8843527463358
  };
  const mapStyles = {
    height,
    width
  };
  React2.useEffect(() => {
    if (searchQuery && searchQuery.geometry && searchQuery.geometry.location) {
      const locationLatLng = {
        lat: searchQuery.geometry.location.lat(),
        lng: searchQuery.geometry.location.lng()
      };
      setSearchedLocation(locationLatLng);
    }
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    geofences.forEach((geofence) => {
      const className = `geofence-label-${geofence.id}`;
      const styles = `
                .${className} {
                    background-color: ${geofence.geofenceColor};
                }
            `;
      styleSheet.innerText += styles;
    });
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [geofences, searchQuery]);
  const handleMapClick = (event) => {
    const noExistingGeofence = geofences.every((geofence) => !geofence.polygons || geofence.polygons.length === 0);
    if (mode === "new" && noExistingGeofence && event.latLng) {
      setCurrentPolygon([...currentPolygon, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
    }
  };
  const handlePolygonComplete = () => {
    if (currentPolygon.length > 2 && onPolygonComplete) {
      onPolygonComplete(currentPolygon);
      setCurrentPolygon([]);
    }
  };
  const calculatePolygonCenter = (polygons) => {
    let lat = 0, lng = 0;
    polygons.forEach((point) => {
      lat += point.lat;
      lng += point.lng;
    });
    return {
      lat: lat / polygons.length,
      lng: lng / polygons.length
    };
  };
  const handleMarkerClick = (geofence) => {
    setSelectedGeofence(geofence);
  };
  const closeModal = () => {
    setSelectedGeofence(null);
  };
  return /* @__PURE__ */ React2__default.default.createElement(api.LoadScript, { googleMapsApiKey: "AIzaSyDFuE_-2cXmeOlWIW3AvirBif1UqvMyn-U", libraries: ["places"] }, /* @__PURE__ */ React2__default.default.createElement(
    api.GoogleMap,
    {
      center: searchLocation || defaultCenter,
      zoom,
      mapContainerClassName: "rounded-b-lg focus:outline-none relative",
      mapContainerStyle: mapStyles,
      onClick: handleMapClick,
      options: {
        zoomControl: true,
        controlSize: 20
      }
    },
    geofences.map((geofence) => geofence.polygons && geofence.polygons.length > 0 && /* @__PURE__ */ React2__default.default.createElement(React2__default.default.Fragment, { key: geofence.id }, /* @__PURE__ */ React2__default.default.createElement(
      api.Polygon,
      {
        path: geofence.polygons,
        options: {
          fillColor: geofence.geofenceColor,
          fillOpacity: mode === "view" ? 0.2 : 0.5,
          strokeColor: geofence.geofenceColor,
          strokeOpacity: 1,
          strokeWeight: 4,
          editable: mode === "edit"
        }
      }
    ), mode === "view" && /* @__PURE__ */ React2__default.default.createElement(
      api.Marker,
      {
        position: calculatePolygonCenter(geofence.polygons),
        label: {
          text: geofence.geofenceName,
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: "14px",
          className: `geofence-label geofence-label-${geofence.id} p-2 rounded-lg text-center h-[35px] mt-2`
        },
        onClick: () => handleMarkerClick(geofence)
      }
    ), selectedGeofence && selectedGeofence.id === geofence.id && /* @__PURE__ */ React2__default.default.createElement("div", { className: "absolute right-8 top-[20px]" }, /* @__PURE__ */ React2__default.default.createElement(GeofenceModal_default, { geofence: selectedGeofence, onClose: closeModal })))),
    mode === "new" && /* @__PURE__ */ React2__default.default.createElement(
      api.Polygon,
      {
        path: currentPolygon,
        options: {
          fillColor: "#F39C12",
          fillOpacity: 0.5,
          strokeColor: "#F39C12",
          strokeOpacity: 1,
          strokeWeight: 4,
          editable: true
        },
        onDblClick: handlePolygonComplete
      }
    )
  ));
};
var Map_default = Map;
var LocationSearch = ({ onPlaceSelect, otherStyles, value }) => {
  const [searchInput, setSearchInput] = React2.useState(value || "");
  const autocompleteRef = React2.useRef(null);
  React2.useEffect(() => {
    setSearchInput(value || "");
  }, [value]);
  const handlePlaceSelect = (place) => {
    onPlaceSelect(place);
  };
  return /* @__PURE__ */ React2__default.default.createElement(api.LoadScript, { googleMapsApiKey: "AIzaSyDFuE_-2cXmeOlWIW3AvirBif1UqvMyn-U", libraries: ["places"] }, /* @__PURE__ */ React2__default.default.createElement(
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
    /* @__PURE__ */ React2__default.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Search for a place",
        value: searchInput,
        className: `rounded-md p-2 focus:outline-none ${otherStyles}`,
        onChange: (e) => setSearchInput(e.target.value)
      }
    )
  ));
};
var LocationSearch_default = LocationSearch;

exports.GeofenceModal = GeofenceModal_default;
exports.LocationSearch = LocationSearch_default;
exports.Map = Map_default;
exports.Switch = Switch_default;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map