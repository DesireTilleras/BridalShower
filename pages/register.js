import Form from "../components/form.js";

function register({ names }) {
  console.log(names.Names);
  return (
    <div>
      <Form />
      <p>Anmälda:</p>
      <ul>
        {names.Names.map((name) => (
          <li>{name.username}</li>
        ))}
      </ul>
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
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { names },
  };
}
