
import {registeredRepo} from '../../helpers/api/registered-repo'


export default function handler(req, res) {

   // Get data submitted in request's body.
  const {...user} = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("user: ", user);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!user.username) {
    // Sends a HTTP bad request error code

    return res.status(400).json({ data: "First or last name not found" });
  }
  // if(usersRepo.find(x=> x.username === user.username))
  // throw `User with username already exists ${user.username}`


  registeredRepo.create(user)

    // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ username: `${user.username}`, email:`${user.email}`});
}
