import Link from "next/link";
import StyledButton from '../components/styled/styledButton'


const button = (props) => {
  return (
    <div className="buttonDiv">
      <Link href={props.path} passHref={true}>
        <StyledButton>{props.text}</StyledButton>
      </Link>
    </div>
  );
};
export default button;
