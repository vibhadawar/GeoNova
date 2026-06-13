import { MapContainer, TileLayer } from "react-leaflet";

function MapView() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-6 dark:text-white">
        Interactive Map
      </h2>

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

    </div>
  );
}

export default MapView;