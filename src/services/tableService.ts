import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Standing, Table } from "../types";

const endpoint = "http://localhost:8080";

export const getTable = async (): Promise<Standing[]> => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: `${endpoint}/table`,
  };

  try {
    const { data }: AxiosResponse<Table> = await axios(config);

    return data.standings;
  } catch (e) {
    console.error(e);

    return [];
  }
};
