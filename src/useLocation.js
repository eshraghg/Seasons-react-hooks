import { useEffect, useState } from "react";

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  // you can return an object also. {lat:lat, errorMassage:errorMassage}
  return [lat, errorMessage];
};

export default useLocation;
