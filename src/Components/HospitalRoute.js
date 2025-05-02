import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { useLocation } from "react-router-dom";
import "leaflet-routing-machine";
import { hospitallist } from "../Utils/HospitalList";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});



const HospitalRouteMap = () => {
  const mapRef = useRef(null);
  const routingControlRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  const location = useLocation();
  const selectedHospitalId = location.state?.selectedHospitalId;
  const selectedHospital = hospitallist.find(
    (h) => h.id === parseInt(selectedHospitalId)
  );

  useEffect(() => {
    if (!selectedHospital || mapInitialized) return;

    const map = L.map(mapContainerRef.current).setView(
      [selectedHospital.lat, selectedHospital.long],
      14
    );
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([selectedHospital.lat, selectedHospital.long])
      .addTo(map)
      .bindPopup(selectedHospital.name)
      .openPopup();

    setMapInitialized(true);
    setTimeout(() => {
      map.invalidateSize();
    }, 500);
  }, [selectedHospital, mapInitialized]);

  const getUserLocationAndRoute = () => {
    if (!selectedHospital) {
      alert("No hospital selected");
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          if (routingControlRef.current) {
            mapRef.current.removeControl(routingControlRef.current);
          }

          routingControlRef.current = L.Routing.control({
            waypoints: [
              L.latLng(userLat, userLng),
              L.latLng(selectedHospital.lat, selectedHospital.long),
            ],
            routeWhileDragging: false,
          }).addTo(mapRef.current);
        },
        () => {
          alert("Location access denied or unavailable.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div>
      <button
        onClick={getUserLocationAndRoute}
        disabled={!selectedHospital}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: selectedHospital ? "#2563eb" : "#aaa",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Route to Hospital
      </button>
      <div
        id="map"
        ref={mapContainerRef}
        style={{ height: "500px", width: "100%" }}
      ></div>
    </div>
  );
};

export default HospitalRouteMap;
