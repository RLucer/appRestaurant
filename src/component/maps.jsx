import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapaGoogle = ({ center, zoom }) => {
  // Coordenadas y detalles del marcador

 const marker = {
    lat: -33.732599,
    lng: -70.914120,
    name: 'ANTOJITOS'
  };

// Componente para el marcador
const Marker = ({ name }) => <div>{name}</div>;
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB-ymddOr1u9wGwOtxjZ0clN1Z5IdWsGL8' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Marcador */}
        <Marker
          lat={marker.lat}
          lng={marker.lng}
          name={marker.name}
          color="Blue"
        />
      </GoogleMapReact>
    </div>
  );
};


export default MapaGoogle;
