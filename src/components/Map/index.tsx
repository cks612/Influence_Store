import React, { MutableRefObject, useEffect, useRef } from "react";
import styled from "styled-components";
import useGetCurrentLocation from "../../hooks/news/useGetCurrentLocation";

type MapProps = { lat: string; lng: string };

const Map = ({ lat, lng }: MapProps) => {
  const myLocation = useGetCurrentLocation();
  const kakaoMap = useRef<HTMLDivElement>(null);
  const mapRef = useRef(null);

  const initMap = () => {
    if (typeof myLocation === "string") return;

    const mapContainer = kakaoMap.current;
    const mapOption = {
      center: new kakao.maps.LatLng(myLocation.latitude, myLocation.longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer as HTMLElement, mapOption);
    (mapRef as MutableRefObject<any>).current = map;
  };

  useEffect(() => {
    kakao.maps.load(() => initMap());
  });

  return <MapContainer ref={kakaoMap} />;
};

export default Map;

const MapContainer = styled.div`
  width: 600px;
  height: 400px;
`;
