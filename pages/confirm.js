import { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Map from "./components/map";

const Confirm = () => {
  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  const getPickupCoordinates = () => {
    const pickup = "Santa Monica";

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibmFtYnNlIiwiYSI6ImNsNWxmZzE3MjBqYTIzanFyMjhpZjRlYXkifQ.e_zeezriJc5mN9vwRWzYXA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickUpCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = () => {
    const dropoff = "Los Angeles";

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibmFtYnNlIiwiYSI6ImNsNWxmZzE3MjBqYTIzanFyMjhpZjRlYXkifQ.e_zeezriJc5mN9vwRWzYXA",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>Ride Selector Confirm Button</RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen`;

const RideContainer = tw.div`flex flex-col flex-1`;
