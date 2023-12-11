import { IFields } from '../../interfaces';

export interface ILoginFieldsData {
  userEmail: IFields;
  userPassword: IFields;
}

export const loginFieldsData: ILoginFieldsData = {
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
};
