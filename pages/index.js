import { StyledFrontPage } from "../styles/StyledFrontPage";
import { Pic } from "../components/Image";
import { SideMenuContext } from "../components/common/sideMenuContext";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { Panel } from "../components/panel";
import maddePic from "../public/images/madde.jpg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SideMenuContext.Provider value={[isVisible, setIsVisible]}>
      <div className="wrapper-container">
        <Panel />
        <div className="wrapper">
          <div>
            <SideBar />
          </div>
        <StyledFrontPage>
          <div className="main-content">
            <div>
              <Pic pic={maddePic} alt="Pic of Madde" />
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
      </div>
    </SideMenuContext.Provider>
  );
}
