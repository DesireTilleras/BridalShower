import { StyledFrontPage } from "../styles/StyledFrontPage";
import PicOfMadde from "../components/Image";
import { SideMenuContext } from "../components/common/sideMenuContext";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { Panel } from "../components/panel";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SideMenuContext.Provider value={[isVisible, setIsVisible]}>
      <div style={{ display: "flex", flexDirection: "column"}}>
        <Panel />
        <StyledFrontPage>
          <div>
            <SideBar />
          </div>
          <div className="main-content">
            <div>
              <PicOfMadde />
            </div>
            <div>
              <h1>Välkommen till Maddes Möhippe-sida!</h1>
            </div>
            <div>
              <p>
                Här kan du anmäla dig till möhippan, se schema samt läsa om de
                olika lekarna!
              </p>
            </div>
          </div>
        </StyledFrontPage>
      </div>
    </SideMenuContext.Provider>
  );
}
