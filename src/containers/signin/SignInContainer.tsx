import { useState } from 'react';

import { Login } from '../../components';
import { trimFieldValues } from '../../utils/helper';
import { ISignInPayload } from '../../interfaces';
import { ILoginFieldsData, loginFieldsData } from '../../components/login/LoginFields';
import { useLoginMutation } from '../../services';
import { useNavigate } from 'react-router-dom';
import { AppPath } from '../../routes';

const SignInContainer = () => {
  const [formFields, setFormFields] = useState<ILoginFieldsData>(loginFieldsData);

  const navigate = useNavigate();

  const [signInUser, { isLoading }] = useLoginMutation();

  const handleChange = (name: string, value: string | boolean) => {
    setFormFields((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof ILoginFieldsData],
        value,
        isError: false,
      },
    }));
  };

  /* Checking the Whether the Field is Filled or not if not throwing Validation Error */
  const errorStatus = (): boolean => {
    let isError = false;
    Object.keys(formFields).forEach((fieldName: string) => {
      const formFieldName = fieldName as keyof ILoginFieldsData;
      if (formFields[formFieldName].isRequired && !trimFieldValues(formFields[formFieldName])) {
        isError = true;
        setFormFields((prev) => ({
          ...prev,
          [formFieldName]: {
            ...prev[formFieldName],
            isError: true,
          },
        }));
      }
    });
    return isError;
  };

  /*These Function is used to reset the Form Fields */
  const resetFormFields = () => {
    const resetFields: ILoginFieldsData = loginFieldsData;
    let val: string | boolean = '';
    Object.keys(formFields).forEach((field) => {
      const fieldData = field as keyof ILoginFieldsData;
      if (typeof formFields[fieldData].value === 'boolean') {
        val = false;
      }
      resetFields[fieldData] = {
        ...formFields[fieldData],
        value: val,
        isError: false,
      };
    });
    return resetFields;
  };

  const signInUserPayload = (): ISignInPayload => {
    return {
      email: trimFieldValues(formFields.userEmail),
      password: trimFieldValues(formFields.userPassword),
    };
  };

  const signInHandler = async () => {
    if (!errorStatus()) {
      await signInUser({
        payload: signInUserPayload(),
      })
        .unwrap()
        .then((payload) => {
          if (payload) {
            setFormFields(resetFormFields());
          }
        })
        .catch((error) => error);
    }
  };

  const handleSignUpHandler = (): void => {
    navigate(AppPath.signup);
  };

  return (
    <Login
      isLoading={isLoading}
      isButtonEnabled={false}
      formFields={formFields}
      handleChange={handleChange}
      signInHandler={signInHandler}
      handleSignUpHandler={handleSignUpHandler}
    />
  );
};

export default SignInContainer;
