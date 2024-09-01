import React from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  latitude?: number;
  longitude?: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
    if(latitude === undefined){
        latitude = 0
    }
    if(longitude === undefined){
        latitude = 0
    }
  return (
    <MapContainer center={[latitude, longitude]} zoom={10} style={{ height: '380px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}></Marker>
    </MapContainer>
  );
};

export default Map;