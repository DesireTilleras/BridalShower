import { StyledPanel } from "./styled/StyledPanel";
import Button from "./Button";
import { useContext } from "react";
import { SideMenuContext } from "./common/sideMenuContext";

export const Panel = () => {
  const [isVisible, setIsVisible] = useContext(SideMenuContext);

  return (
    <StyledPanel>
      <Button
        text="Settings"
        path=""
        onClick={() => setIsVisible(!isVisible)}
      ></Button>
    </StyledPanel>
  );
};
