import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmFtYnNlIiwiYSI6ImNsNWxmZzE3MjBqYTIzanFyMjhpZjRlYXkifQ.e_zeezriJc5mN9vwRWzYXA";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    addToMap(map);
  });

  const addToMap = (map) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([12.554729, 55.70651])
      .addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
flex-1
`;

export default Map;
