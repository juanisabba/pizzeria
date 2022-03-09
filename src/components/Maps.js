import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoianVhbmlzYWJiYXRpbmkiLCJhIjoiY2wwaGg1NzMyMDF4MTNibW9wZzdvN3N5diJ9.YOZ8JSdBf0Wk2jdXX4qnag"; // Set your mapbox token here

function Maps() {
  return (
      <Map
        id="como-llegar"
        initialViewState={{
          latitude: 40.73054,
          longitude: -74.00206,
          zoom: 15,
        }}
        style={{ width: "100%", height: '33vw', maxHeight: 450, minHeight: 300 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-74.00206} latitude={40.73054} color="red" />
      </Map>
  );
}

export default Maps;
