import Image from "next/image";
import maddePic from "../public/images/madde.jpg";

const image = (props) => {
  return (
    <div className="imageCss">
      <Image src={maddePic} alt="Pic of Madde" layout="fill" className="border-radius"></Image>
    </div>
  );
};

export default image;
