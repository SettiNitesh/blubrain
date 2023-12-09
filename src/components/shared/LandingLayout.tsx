interface ILandingLayoutProps {
  title: string;
  component: JSX.Element;
}

const LandingLayout = ({ title, component }: ILandingLayoutProps) => {
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
        <div className="w-full flex flex-col p-16">
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
              {title}
            </p>
            <p className="text-xs">For Social Media and Hospital Services</p>
          </div>
          {/* This is the Body Section */}
          {component}
        </div>
        {/* This is the Footer with Banner Section */}
        <div className="flex-grow" />
        <div className="flex px-16  mt-auto mb-6">
          <img src={"google.png"} alt="logo" className="mr-3" />
          <img src={"apple.png"} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default LandingLayout;
