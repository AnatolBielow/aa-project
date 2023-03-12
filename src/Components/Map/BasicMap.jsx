import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import L from 'leaflet'
import {osm} from "./osm-providers";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const BasicMap = ({center, popup}) => {
 
  const ZOOM_LEVEL = 15;

  return (
    
      <MapContainer center={center} zoom={ZOOM_LEVEL} style={{width: "100%", height: "100%"}}>
        <TileLayer
          url={osm.maptiler}
          attribution={osm.attribution}
        />
 <Marker position={center}>
        <Popup>
          {popup}
        </Popup>
      </Marker>

      </MapContainer>
   
      

     
  
  );
};
