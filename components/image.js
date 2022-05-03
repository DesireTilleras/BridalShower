import Image from "next/image";
import { StyledImage } from "./styled/StyledImage";

export const Pic = (props) => {
  return (
    <StyledImage>
      <Image src={props.pic} alt={props.alt} layout={props.layout} className="picture"></Image>
    </StyledImage>
  );
};

