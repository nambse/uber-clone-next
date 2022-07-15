import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmFtYnNlIiwiYSI6ImNsNWxmZzE3MjBqYTIzanFyMjhpZjRlYXkifQ.e_zeezriJc5mN9vwRWzYXA";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
flex-1
`;

export default Map;
