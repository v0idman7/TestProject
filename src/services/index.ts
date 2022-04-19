import axios from "axios";

export const checkToken = () => {
  const tokenData = localStorage.getItem("tokenData");

  if (tokenData) {
    const tokenObj = JSON.parse(tokenData);
    if (Date.now() >= tokenObj.expires_in + tokenObj.created_at * 1000) {
      window.location.replace("/login");
      return "";
    }
    return `${tokenObj.token_type} ${tokenObj.access_token}`;
  }
  window.location.replace("/login");
  return "";
};

export const api = axios.create({
  baseURL: "https://jogtracker.herokuapp.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const auth = async () => {
  const response = await api({
    method: "POST",
    url: "auth/uuidLogin",
    params: { uuid: "hello" },
  });

  localStorage.setItem("tokenData", JSON.stringify(response.data.response));
  window.location.replace("/");
};

export const getJogs = async () => {
  const response = await api({
    method: "GET",
    url: "data/sync",
    headers: { Authorization: checkToken() },
  });

  return response.data.response;
};

export const getCurrentUser = async () => {
  const response = await api({
    method: "GET",
    url: "auth/user",
    headers: { Authorization: checkToken() },
  });

  return response.data.response;
};

export const addJog = async (date: string, time: number, distance: number) => {
  const response = await api({
    method: "POST",
    url: "data/jog",
    headers: { Authorization: checkToken() },
    data: { date, time, distance },
  });

  const result = {
    id: response.data.response.id,
    user_id: response.data.response.user_id.toString(),
    distance: response.data.response.distance,
    time: response.data.response.time,
    date: Math.floor(Date.parse(response.data.response.date) / 1000),
  };

  console.log(result);

  return result;
};

export const editJog = async (
  date: string,
  time: number,
  distance: number,
  jog_id: number,
  user_id: string
) => {
  const response = await api({
    method: "PUT",
    url: "data/jog",
    headers: { Authorization: checkToken() },
    data: { date, time, distance, jog_id, user_id },
  });

  const result = {
    id: response.data.response.id,
    user_id: response.data.response.user_id.toString(),
    distance: response.data.response.distance,
    time: response.data.response.time,
    date: Math.floor(Date.parse(response.data.response.date) / 1000),
  };

  console.log(result);

  return result;
};

export const deleteJog = async (jog_id: number, user_id: string) => {
  const response = await api({
    method: "DELETE",
    url: "data/jog",
    headers: { Authorization: checkToken() },
    data: { jog_id, user_id },
  });

  if (response.data.response === "OK") return true;

  return false;
};
