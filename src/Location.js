import React, { useEffect, useState } from 'react';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Check if Geolocation is supported by the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log('Error getting location:', error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <h1>User Location</h1>
      {latitude && longitude ? (
        <p>
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationComponent;