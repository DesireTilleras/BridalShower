import { registeredRepo } from "../../helpers/api/registered-repo";

export default function handler(req, res) {
  const names = registeredRepo.getAll();

  res.status(200).json({ Names: names });
}
