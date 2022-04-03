import { StyledSideBar } from "./styled/StyledSideBar";

import { useContext } from "react";
import { SideMenuContext } from "./common/sideMenuContext";

import Button from '../components/Button'

const SideBar = () => {
  const [isVisible] = useContext(SideMenuContext);
  console.log(isVisible);

  return (
    <StyledSideBar className={isVisible ? "isVisible" : "isClosed"}>
      <div>
        <Button text="Anmälan" path="/register" />
      </div>
      <div>
        <Button text="Schema" path="/schema" />
      </div>
      <div>
        <Button text="Lekar" path="/games" />
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
