import { IFields } from '../../interfaces';

export interface ISignUpFieldsData {
  userName: IFields;
  userEmail: IFields;
  userPassword: IFields;
  confirmPassword: IFields;
  privatePolicy: IFields;
}

export const signUpFieldsData: ISignUpFieldsData = {
  userName: {
    key: 'userName',
    placeHolder: 'Enter your username',
    label: 'Username',
    type: 'text',
    isRequired: true,
    value: '',
    isError: false,
    maxLength: 150,
    errorMessage: 'This Field is Required',
  },
  userEmail: {
    key: 'userEmail',
    placeHolder: 'Enter your Email',
    label: 'Email',
    type: 'text',
    isRequired: true,
    value: '',
    isError: false,
    maxLength: 150,
    errorMessage: 'This Field is Required',
  },
  userPassword: {
    key: 'userPassword',
    placeHolder: 'Enter your Password',
    label: 'Password',
    type: 'password',
    isRequired: true,
    value: '',
    isError: false,
    maxLength: 150,
    errorMessage: 'This Field is Required',
  },
  confirmPassword: {
    key: 'confirmPassword',
    placeHolder: 'Confirm your Password',
    label: 'Confirm Password',
    type: 'password',
    isRequired: true,
    value: '',
    isError: false,
    maxLength: 150,
    errorMessage: 'This Field is Required',
  },
  privatePolicy: {
    key: 'privatePolicy',
    label: 'I agree to the Blu Brain Terms of service and private policy',
    type: 'checkbox',
    isRequired: true,
    value: false,
  },
};
