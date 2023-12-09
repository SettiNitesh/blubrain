import { LandingLayout } from "../shared";
import { ILoginFieldsData } from "./LoginFields";
import LoginForm from "./LoginForm";

interface ILoginProps {
  formFields: ILoginFieldsData;
  isLoading: boolean;
  isButtonEnabled: boolean;
  signInHandler: () => void;
  handleChange: (name: string, value: string | boolean) => void;
}

const Login = ({
  formFields,
  isLoading,
  isButtonEnabled,
  signInHandler,
  handleChange,
}: ILoginProps) => {
  return (
    <LandingLayout
      title="Login account"
      component={
        <>
          <LoginForm
            isLoading={isLoading}
            isButtonEnabled={isButtonEnabled}
            formFields={formFields}
            handleChange={handleChange}
            signInHandler={signInHandler}
          />
          <p className="mt-[1.41rem]  flex items-center justify-center font-semibold">
            Don't have an account?
            <span className="text-green ml-2">SignUp</span>
          </p>
        </>
      }
    />
  );
};

export default Login;
