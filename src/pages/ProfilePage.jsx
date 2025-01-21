import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import './ProfilePage.css';
import { meta } from '@eslint/js';

const ProfilePage = ({ data, closePage }) => {
    return (
        <div class="profile-detail-overlay" id="profileDetailOverlay">
            <div class="profile-detail-container">
                <button class="close-button" id="closeButton" onClick={closePage}>&times;</button>
                <div class="profile-info-section">
                    <img src={data.photo} alt="Profile Picture" class="profile-detail-photo" />
                    <h2 class="profile-detail-name">{data.name}</h2>
                    <p class="profile-detail-description">{data.description}
                    </p>
                    <div class="profile-detail-contact">
                        <p><strong>Email:</strong> {data.contact.email}</p>
                        <p><strong>Phone:</strong> {data.contact.phone}</p>
                        <p><strong>Address:</strong> {data.address}</p>
                    </div>
                </div>
                <div class="map-section">
                    <div id="map">
                        <MyComponent latitude={data.location.latitude} longitude={data.location.longitude}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage


const containerStyle = {
  width: '100%',
  height: '100%',
}


function MyComponent({latitude, longitude}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });

  const center = {
    lat: latitude,
    lng: longitude,
  }

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  )
}