import { useRouter } from 'next/router'
import StyledForm from './styled/StyledForm'
import StyledButton from './styled/StyledButton';

export default function PageWithJSbasedForm() {
  const router = useRouter()
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

        // Get data from the form.
    const data = {
      username: event.target.username.value,
      email: event.target.email.value
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/register";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
  };
  return (
 
    // We pass the event to the handleSubmit() function on submit.
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="username">Namn : </label>
      <input type="text" id="username" name="username" required />    
      <label htmlFor="username">Mailadress : </label>
      <input type="text" id="email" name="email" required />    
      <StyledButton type="submit" onClick={() => router.push('/register')}>Anmäl</StyledButton>
    </StyledForm>
  );
}
