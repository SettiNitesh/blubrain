import { IFields } from '../interfaces';

export const Http = Object.freeze({
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
});

export const GetBaseUrl = () => {
  const API_URL = `http://localhost:4000`;

  return API_URL;
};

export const trimFieldValues = (field: IFields) => {
  return field.value.toString().trim();
};

export const HMS_PATH = `/api/v1/hms`;
