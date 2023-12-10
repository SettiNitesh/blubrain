import { LandingLayout } from "../shared";
import { ISignUpFieldsData } from "./SignUpFields";
import SignUpForm from "./SignUpForm";

interface ISignUpProps {
  formFields: ISignUpFieldsData;
  isLoading: boolean;
  isButtonEnabled: boolean;
  signUpHandler: () => void;
  handleSignInHandler: () => void;
  handleChange: (name: string, value: string | boolean) => void;
}

const SignUp = ({
  formFields,
  isLoading,
  isButtonEnabled,
  signUpHandler,
  handleSignInHandler,
  handleChange,
}: ISignUpProps) => {
  return (
    <LandingLayout
      title="Create account"
      component={
        <>
          <SignUpForm
            isLoading={isLoading}
            isButtonEnabled={isButtonEnabled}
            formFields={formFields}
            handleChange={handleChange}
            signUpHandler={signUpHandler}
          />
          <p className="mt-[1.41rem]  flex items-center justify-center font-semibold">
            Do you have an account?
            <span
              className="text-green ml-2 cursor-pointer"
              onClick={handleSignInHandler}
            >
              Login
            </span>
          </p>
        </>
      }
    />
  );
};

export default SignUp;
