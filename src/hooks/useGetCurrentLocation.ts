import { useEffect, useState } from "react";

const useGetCurrentLocation = () => {
  const [myLocation, setMyLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);
  return myLocation;
};

export default useGetCurrentLocation;
