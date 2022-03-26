import { isMobileOnly, isTablet } from "react-device-detect";

function getDeviceType() {
  if (isMobileOnly) {
    return "mobile";
  } else if (isTablet) {
    return "tablet";
  } else {
    return "desktop";
  }
}

export default getDeviceType;
