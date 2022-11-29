import { getUsers } from "../services/user.services";

const getById = async (req, res) => {
  try {
    console.log(await getUsers());
    res.send(await getUsers());
  } catch (err) {}
};

export { getById };