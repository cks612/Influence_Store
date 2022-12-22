import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useGetCurrentLocation from "../../hooks/utils/useGetCurrentLocation";
import type { Store } from "../../hooks/stores/useGetStore";

const Map = ({ store }: { store: Store[] }) => {
  const [selectStore, setSelectStore] = useState<Store | null>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const myLocation = useGetCurrentLocation();
  const kakaoMap = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  const initMap = useCallback(() => {
    if (myLocation === null) return;

    const mapContainer = kakaoMap.current;
    const mapOption = {
      center: new kakao.maps.LatLng(myLocation.latitude, myLocation.longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer as HTMLElement, mapOption);
    mapRef.current = map;

    map.setMinLevel(3);
    map.setMaxLevel(10);
  }, [myLocation]);

  const getMarker = useCallback(() => {
    let markerArray: any[] = [];

    markers.forEach(item => item.setMap(null));
    store?.forEach(item => {
      const mapMarker = new kakao.maps.Marker({
        map: mapRef.current,
        position: new kakao.maps.LatLng(
          Number(item.REFINE_WGS84_LAT),
          Number(item.REFINE_WGS84_LOGT)
        ),
        clickable: true,
      });
      kakao.maps.event.addListener(mapMarker, "click", function () {
        setSelectStore(item);
        const markerCenter = new kakao.maps.LatLng(
          Number(item.REFINE_WGS84_LAT),
          Number(item.REFINE_WGS84_LOGT)
        );
        mapRef.current?.panTo(markerCenter);
      });
      markerArray.push(mapMarker);
    });
    setMarkers(markerArray);
  }, [store, mapRef]);

  useEffect(() => {
    kakao.maps.load(() => initMap());
  }, [initMap]);

  useEffect(() => {
    getMarker();
  }, [getMarker, myLocation]);

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
