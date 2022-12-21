import React, { useRef } from "react";
import styled from "styled-components";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  return <MapContainer ref={mapRef} />;
};

export default Map;

const MapContainer = styled.div`
  width: 600px;
  height: 400px;
`;
