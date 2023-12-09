import { ISignUpFieldsData } from "./SignUpFields";
import SignUpForm from "./SignUpForm";

interface ISignUpProps {
  formFields: ISignUpFieldsData;
  isLoading: boolean;
  isButtonEnabled: boolean;
  signUpHandler: () => void;
  handleChange: (name: string, value: string | boolean) => void;
}

const SignUp = ({
  formFields,
  isLoading,
  isButtonEnabled,
  signUpHandler,
  handleChange,
}: ISignUpProps) => {
  return (
    <section className="flex w-full h-screen">
      <div className="w-[60%] bg-green bg-opacity-20 flex flex-col  items-center">
        <p className="mt-[2.82rem] mx-[5.73rem] mb-[2.69rem] font-semibold text-[1.5rem] text-black tracking-[0.04rem] font-cormorant">
          Social media shared today, tomorrow or by location Welcome to World of
          Medicine
        </p>
        <img
          src={"logo.png"}
          alt="logo"
          className="w-[27rem] h-[27rem] items-center"
        />
      </div>
      <div className="flex flex-col w-[40%]">
        <div>
          <div className="w-full flex flex-col  p-16">
            <div className="flex items-start">
              <div className="flex items-center justify-center">
                <img
                  src={"logo.png"}
                  alt="logo"
                  className="w-[3rem] h-[3rem] items-center"
                />
                <p className="font-semibold text-lg tracking-wide text-green">
                  Blu Brain
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mt-8 gap-y-1">
              <p className="text-base font-semibold leading-relaxed text-black">
                Create account
              </p>
              <p className="text-xs">For Social Media and Hospital Services</p>
            </div>
            <SignUpForm
              isLoading={isLoading}
              isButtonEnabled={isButtonEnabled}
              formFields={formFields}
              handleChange={handleChange}
              signUpHandler={signUpHandler}
            />
            <p className="mt-[1.41rem]  flex items-center justify-center font-semibold">
              Don’t have an account?
              <span className="text-green ml-2">Login</span>
            </p>
          </div>
          <div className="flex px-16">
            <img src={"google.png"} alt="logo" className="mr-3" />
            <img src={"apple.png"} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
