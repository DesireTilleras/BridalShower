import { registeredRepo } from "../../helpers/api/registered-repo";

export default function handler(req, res) {
  const names = registeredRepo.getAll();

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ Names: names });
}
