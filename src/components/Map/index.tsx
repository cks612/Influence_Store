import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useGetCurrentLocation from "../../hooks/news/useGetCurrentLocation";

var POSITION = [
  {
    title: "카카오",
    lat: 33.450705,
    lng: 126.570677,
  },
  {
    title: "생태연못",
    lat: 33.450936,
    lng: 126.569477,
  },
  {
    title: "텃밭",
    lat: 33.450879,
    lng: 126.56994,
  },
  {
    title: "근린공원",
    lat: 33.451393,
    lng: 126.570738,
  },
];

const Map = () => {
  const myLocation = useGetCurrentLocation();
  const kakaoMap = useRef<HTMLDivElement>(null);

  const initMap = () => {
    if (myLocation === null) return;
    const mapContainer = kakaoMap.current;
    const mapOption = {
      center: new kakao.maps.LatLng(myLocation.latitude, myLocation.longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer as HTMLElement, mapOption);

    map.setMinLevel(3);
    map.setMaxLevel(8);

    POSITION.forEach(item => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(item.lat, item.lng),
        clickable: true,
      });
      kakao.maps.event.addListener(marker, "click", function () {});
    });
  };

  useEffect(() => {
    kakao.maps.load(() => initMap());
  }, [myLocation]);

  return (
    <>
      <MapContainer ref={kakaoMap}>
        {!myLocation && <div>loading</div>}
      </MapContainer>
    </>
  );
};

export default Map;

const MapContainer = styled.div`
  width: 600px;
  height: 400px;
`;
