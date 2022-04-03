import "../styles/globals.css";
import getDeviceType from "../support/deviceTypeOrientation";
import { DeviceProvider } from "../components/common/DeviceProvider";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  return (
    <DeviceProvider value={deviceType}>
      <Component {...pageProps} />
    </DeviceProvider>
  );
}

export default MyApp;
