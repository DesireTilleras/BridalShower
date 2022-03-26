import PicOfMadde from "../components/image";
import Button from "../components/button.js";
import { useState } from "react";
import SideBar from "../components/sideBar";

function StartPage() {
  const [hidden, setHidden] = useState(false);

  let propsRegister = {
    text: "Anmälan",
    path: "/register",
  };
  let propsSchema = {
    text: "Schema",
    path: "/schema",
  };
  let propsGames = {
    text: "Lekar",
    path: "/games",
  };

  return (
    <div style={{display: "flex", alignItems:"space-around" }}>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <PicOfMadde />
        </div>

        <div>
          <h1>Välkommen till Maddes Möhippe-sida!</h1>
        </div>
        <div>
          <p>
            Här kan du anmäla dig till möhippan, se schema samt läsa om de olika
            lekarna!
          </p>
        </div>
        <div>
          <Button {...propsRegister} />
          <Button {...propsSchema} />
          <Button {...propsGames} />
          <button onClick={() => setHidden(!hidden)}>KLicka mig</button>
        </div>
      </div>
      {hidden ? <SideBar /> : ""}
    </div>
  );
}

export default StartPage;
