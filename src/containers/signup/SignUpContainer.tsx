import { useState } from 'react';

import { SignUp } from '../../components';
import { ISignUpFieldsData, signUpFieldsData } from '../../components/signup/SignUpFields';
import { trimFieldValues } from '../../utils/helper';
import { ISignUpPayload } from '../../interfaces';
import { successToast } from '../../shared';
import { useRegisterMutation } from '../../services';
import { useNavigate } from 'react-router-dom';
import { AppPath } from '../../routes';

const SignUpContainer = () => {
  const [formFields, setFormFields] = useState<ISignUpFieldsData>(signUpFieldsData);

  const navigate = useNavigate();

  const [signUpUser, { isLoading }] = useRegisterMutation();

  const handleChange = (name: string, value: string | boolean) => {
    setFormFields((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof ISignUpFieldsData],
        value,
        isError: false,
      },
    }));
  };

  /* Checking the Whether the Field is Filled or not if not throwing Validation Error */
  const errorStatus = (): boolean => {
    let isError = false;
    Object.keys(formFields).forEach((fieldName: string) => {
      const formFieldName = fieldName as keyof ISignUpFieldsData;
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
    const resetFields: ISignUpFieldsData = signUpFieldsData;
    let val: string | boolean = '';
    Object.keys(formFields).forEach((field) => {
      const fieldData = field as keyof ISignUpFieldsData;
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

  const signUpUserPayload = (): ISignUpPayload => {
    return {
      email: trimFieldValues(formFields.userEmail),
      username: trimFieldValues(formFields.userName),
      password: trimFieldValues(formFields.userPassword),
    };
  };

  const signUpHandler = async () => {
    if (!errorStatus()) {
      await signUpUser({
        payload: signUpUserPayload(),
      })
        .unwrap()
        .then((payload) => {
          if (payload) {
            successToast('Signup Successfull !!');
            setFormFields(resetFormFields());
          }
        })
        .catch((error) => error);
    }
  };

  const handleSignInHandler = (): void => {
    navigate(AppPath.login);
  };

  return (
    <SignUp
      isLoading={isLoading}
      isButtonEnabled={!formFields.privatePolicy.value as boolean}
      formFields={formFields}
      handleChange={handleChange}
      signUpHandler={signUpHandler}
      handleSignInHandler={handleSignInHandler}
    />
  );
};

export default SignUpContainer;
