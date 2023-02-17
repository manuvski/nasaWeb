import { getToken } from "../storage";

export type Mars = {
  id: number;
  nasaId: number;
  sol: number;
  image: string;    
};

const BASE_API_URL = "http://localhost:8000/mars";

export const getMars = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Mars[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncMars = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncApi/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const removeMars = async (id: number) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createMars = async (data: Omit<Mars, "id">) => {
  try {
    const token = getToken();
    await fetch(BASE_API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const updateMars = async (id: number, data: Partial<Mars>) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
