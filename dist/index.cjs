'use strict';

var api = require('@react-google-maps/api');
var React2 = require('react');
var iconsReact = require('@tabler/icons-react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React2__default = /*#__PURE__*/_interopDefault(React2);

var Switch = ({ initialOn }) => {
  const [isChecked, setIsChecked] = React2.useState(initialOn);
  const toggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };
  React2.useEffect(() => {
  }, [initialOn]);
  return /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement("label", { htmlFor: "toggle", className: "flex items-center cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "toggle",
      type: "checkbox",
      className: "hidden",
      checked: isChecked,
      onChange: toggleSwitch
    }
  ), /* @__PURE__ */ React.createElement("div", { className: `toggle-line w-10 h-5 ${isChecked ? "bg-orange-400" : "bg-gray-400"} rounded-full shadow-inner` }), /* @__PURE__ */ React.createElement("div", { className: `toggle-dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-1 top-[2px] ${isChecked ? "translate-x-full bg-white" : "bg-gray-400"}` }))));
};
var Switch_default = Switch;
var Map = ({ geofences = [], zoom = 15, mode = "view", height = "60vh", onGeofenceCreate }) => {
  const [currentPolygon, setCurrentPolygon] = React2.useState([]);
  const [selectedGeofence, setSelectedGeofence] = React2.useState(null);
  const defaultCenter = {
    lat: 21.490499199707944,
    lng: -104.8843527463358
  };
  const mapStyles = {
    height,
    width: "100%"
  };
  React2.useEffect(() => {
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
  }, [geofences]);
  const handleMapClick = (event) => {
    const noExistingGeofence = geofences.every((geofence) => !geofence.polygons || geofence.polygons.length === 0);
    if (mode === "new" && noExistingGeofence && event.latLng) {
      setCurrentPolygon([...currentPolygon, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
    }
  };
  const handlePolygonComplete = () => {
    if (currentPolygon.length > 2 && onGeofenceCreate) {
      const newGeofence = {
        id: `geofence-${Date.now()}`,
        geofenceName: "New Geofence",
        geofenceColor: "#FF0000",
        polygons: currentPolygon
      };
      onGeofenceCreate(newGeofence);
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
  return /* @__PURE__ */ React2__default.default.createElement(api.LoadScript, { googleMapsApiKey: "AIzaSyDFuE_-2cXmeOlWIW3AvirBif1UqvMyn-U" }, /* @__PURE__ */ React2__default.default.createElement(
    api.GoogleMap,
    {
      center: defaultCenter,
      zoom,
      mapContainerClassName: "rounded-b-lg focus:outline-none",
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
    ), mode === "view" && geofences.length > 1 && /* @__PURE__ */ React2__default.default.createElement(
      api.Marker,
      {
        position: calculatePolygonCenter(geofence.polygons),
        label: {
          text: geofence.geofenceName,
          color: "#000000",
          fontWeight: "bold",
          fontSize: "14px",
          className: `geofence-label geofence-label-${geofence.id} p-2 rounded-lg text-center h-[30px] `
        },
        onClick: () => handleMarkerClick(geofence)
      }
    ))),
    mode === "new" && currentPolygon.length > 0 && /* @__PURE__ */ React2__default.default.createElement(
      api.Polygon,
      {
        path: currentPolygon,
        options: {
          fillColor: "#FF0000",
          fillOpacity: 0.5,
          strokeColor: "#FF0000",
          strokeOpacity: 1,
          strokeWeight: 4,
          editable: true
        },
        onDblClick: handlePolygonComplete
      }
    )
  ), selectedGeofence && /* @__PURE__ */ React2__default.default.createElement("div", { className: "absolute top-1/4 right-[200px] w-[200px] flex flex-col gap-2" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black text-white rounded-2xl text-center" }, /* @__PURE__ */ React2__default.default.createElement("h2", { className: "font-bold" }, "Nombre"), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[13px]" }, selectedGeofence.geofenceName)), /* @__PURE__ */ React2__default.default.createElement("div", { className: "flex gap-1 justify-center bg-black text-white text-[13px] rounded-2xl text-center items-center h-[30px]" }, /* @__PURE__ */ React2__default.default.createElement(iconsReact.IconMapPinFilled, { size: 22 }), /* @__PURE__ */ React2__default.default.createElement("p", null, selectedGeofence.geofenceLocation)), /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black rounded-2xl text-white text-center" }, /* @__PURE__ */ React2__default.default.createElement("h2", { className: "font-bold" }, "Tarifa inicial"), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[13px]" }, "$", selectedGeofence.initialRate, ".00")), /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black text-white rounded-2xl text-center" }, /* @__PURE__ */ React2__default.default.createElement("h2", { className: "font-bold" }, "Tarifa dinamica"), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[13px]" }, "$", selectedGeofence.dynamicRateMinPrice, " ", /* @__PURE__ */ React2__default.default.createElement("span", null, "->"), " ", selectedGeofence.dynamicRateMaxDistance, " km"), /* @__PURE__ */ React2__default.default.createElement("p", { className: "text-[13px]" }, "$50 MXN - 9PM a 5AM")), /* @__PURE__ */ React2__default.default.createElement("div", { className: "flex gap-1 justify-between h-[40px]" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black flex items-center p-1 rounded-[60%]" }, /* @__PURE__ */ React2__default.default.createElement(Switch_default, { initialOn: selectedGeofence.on || false })), /* @__PURE__ */ React2__default.default.createElement("div", { className: "bg-black p-1 rounded-[50%] flex items-center" }, /* @__PURE__ */ React2__default.default.createElement("div", { style: { backgroundColor: selectedGeofence.geofenceColor }, className: ` w-[30px] h-[30px] rounded-[50%]` })), /* @__PURE__ */ React2__default.default.createElement("button", { className: "bg-black w-[40px] text-white flex items-center justify-center rounded-[50%]" }, /* @__PURE__ */ React2__default.default.createElement(iconsReact.IconEdit, { size: 24 })), /* @__PURE__ */ React2__default.default.createElement("button", { className: "bg-gray-400/10 w-[40px] rounded-[50%] flex items-center justify-center", onClick: closeModal }, /* @__PURE__ */ React2__default.default.createElement(iconsReact.IconX, null)))));
};
var Map_default = Map;

exports.Map = Map_default;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map