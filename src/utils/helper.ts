import { IFields } from "../interfaces";

export const Http = Object.freeze({
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
});

export const GetBaseUrl = () => {
  const API_URL = `https://6ee0-106-0-38-73.ngrok-free.app`;

  return API_URL;
};

export const trimFieldValues = (field: IFields) => {
  return field.value.toString().trim();
};

export const HMS_PATH = `/api/v1/hms`;
