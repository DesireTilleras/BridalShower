import Link from "next/link";
import Form from "../components/form.js";
import StyledButton from '../components/styled/styledButton'

function register({ names }) {
  console.log(names.Names);
  return (
    <div>
        <Link href="/"><StyledButton>Tillbaks till startsidan</StyledButton></Link>
      <div style={{ textAlign: "center" }}>
        <h1>Anmäl dig här!</h1>
        <Form />
        <h1>Anmälda:</h1>
        <ul>
          {names.Names.map((name) => (
            <p>{name.id} {'. '} {"| Name :"} {name.username} {"| Email :"} {name.email}</p>           
          ))}
        </ul>
      </div>
    </div>
  );
}
export default register;

export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:3000/api/allRegistered");
  const names = await res.json();

  if (!names) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { names },
  };
}
