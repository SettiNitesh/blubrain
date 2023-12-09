import { IFields } from "../../interfaces";

export interface ISignUpFieldsData {
  userName: IFields;
  userEmail: IFields;
  userpassword: IFields;
  confirmPassword: IFields;
  privatePolicy: IFields;
}

export const signUpFieldsData: ISignUpFieldsData = {
  userName: {
    key: "userName",
    placeHolder: "Enter your username",
    label: "username",
    type: "text",
    isRequired: true,
    value: "",
    maxLength: 150,
  },
  userEmail: {
    key: "userEmail",
    placeHolder: "Enter your Email",
    label: "Email",
    type: "text",
    isRequired: true,
    value: "",
    maxLength: 150,
  },
  userpassword: {
    key: "userPassword",
    placeHolder: "Enter your Password",
    label: "Password",
    type: "password",
    isRequired: true,
    value: "",
    maxLength: 150,
  },
  confirmPassword: {
    key: "confirmPassword",
    placeHolder: "Confirm your Password",
    label: "Confirm Password",
    type: "password",
    isRequired: true,
    value: "",
    maxLength: 150,
  },
  privatePolicy: {
    key: "privatePolicy",
    label: "I agree to the Blu Brain Terms of service and private policy",
    type: "checkbox",
    isRequired: true,
    value: false,
  },
};
