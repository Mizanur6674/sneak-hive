import axios from "axios";
import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();
  return data;
};

export const addOrder = async (endpoint, payload) => {
  try {
    const res = await axios.post(
      `${API_URL}${endpoint}`,
      {
        data: payload,
      },
      {
        headers: {
          Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
        httpAgent: new http.Agent({ keepAlive: true }),
      }
    );
    const data = await res.json();
    console.log(res);
    return data;
  } catch (error) {
    console.log(error);
  }
};
