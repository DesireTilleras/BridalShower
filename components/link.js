import Link from "next/link";

const link = (props) => {
  let path = props.path;
  return (
    <>
      <Link href={`../pages/${path}`}></Link>
    </>
  );
};

export default link;
