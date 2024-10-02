import axios from "axios";

export const getCocktails = async () => {
  const res = await axios.get("/api/ingredient");
  return res.data;
};
