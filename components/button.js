import Link from "next/link";
import StyledButton from './styled/StyledButton'


const Button = (props) => {
  return (
    <div className="buttonDiv">
      <Link href={props.path} passHref={true}>
        <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
      </Link>
    </div>
  );
};
export default Button;
