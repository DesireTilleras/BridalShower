import { createContext, useContext } from "react";

const DeviceContext = createContext();

export function DeviceProvider(props) {
  const { value, children } = props;

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
}

export function useDeviceContext() {
  return useContext(DeviceContext);
}
