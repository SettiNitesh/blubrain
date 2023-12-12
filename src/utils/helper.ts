import { IFields } from '../interfaces';

export const Http = Object.freeze({
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
});

export const GetBaseUrl = () => {
  const API_URL = `https://6ee0-106-0-38-73.ngrok-free.app`;

  return API_URL;
};

export const trimFieldValues = (field: IFields) => {
  return field.value.toString().trim();
};

export const checkPath = (url: string) => {
  const getUrl = url.split('/');
  return `/${getUrl[1]}`;
};

declare global {
  interface String {
    toUpperCaseWithUnderscore(): string;
  }
}

String.prototype.toUpperCaseWithUnderscore = function (this: string): string {
  return this.replace(/[\s/-]/g, '_').toUpperCase();
};

export const toUpperCaseWithUnderscore = (inputString: string) => inputString.replace(/[\s/-]/g, '_').toUpperCase();

export const isEqual = (
  input: string | undefined,
  compareWith: string | undefined,
  comparator: (a: string, b: string) => boolean = (a, b) => a === b
): boolean => {
  if (!input || !compareWith) {
    return false;
  }

  const firstOutput = input.toUpperCaseWithUnderscore();
  const secondOutput = compareWith.toUpperCaseWithUnderscore();

  return comparator(firstOutput, secondOutput);
};

export const HMS_PATH = `/api/v1/hms`;
