import Image from "next/image";
import maddePic from "../public/images/madde.jpg";
import { StyledImage } from "./styled/StyledImage";

const image = (props) => {
  return (
    <StyledImage>
      <Image src={maddePic} alt="Pic of Madde" layout="fill" className="border-radius"></Image>
    </StyledImage>
  );
};

export default image;
