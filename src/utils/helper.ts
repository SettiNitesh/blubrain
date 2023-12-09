export const Http = Object.freeze({
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
});

export const GetBaseUrl = () => {
  const API_URL = `https://blubrainmedicine.com/`;

  return API_URL;
};

export const HMS_PATH = `/api/v1/hms`;
