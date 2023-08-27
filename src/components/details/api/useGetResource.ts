import axios from "../../../modules/axios";
import { ISerie } from "../../series/models/seriesModel";

export const getResource = async (url: string): Promise<ISerie | null> => {
  try {
    const { data } = await axios.get(url);
    return data.data.results[0] as ISerie;
  } catch (error) {
    return null;
  }
};
