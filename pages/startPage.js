import PicOfMadde from "../components/image";
import Button from "../components/button.js";

const startPage = () => {

  let propsRegister = {
    text: 'Anmälan',
    path: '/register',
  };
  let propsSchema = {
    text: 'Schema',
    path: '/schema',
  };
  let propsGames = {
    text: 'Lekar',
    path: '/games',
  };

  return (
    <div style={{ textAlign: "center" }}>
      <PicOfMadde/>
      <h1>Välkommen till Maddes Möhippe-sida!</h1>
      <p>
        Här kan du anmäla dig till möhippan, se schema samt läsa om de olika
        lekarna!
      </p>
      <Button {...propsRegister} />
      <Button {...propsSchema} />
      <Button {...propsGames} />
    </div>
  );
};

export default startPage;
