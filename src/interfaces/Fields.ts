export interface IFields {
  key: string;
  label: string;
  type: "text" | "date" | "dropDown" | "checkbox" | "password";
  placeHolder?: string;
  isRequired: boolean;
  isError?: boolean;
  errorMessage?: string;
  maxLength?: number;
  value: string | boolean | number;
}
