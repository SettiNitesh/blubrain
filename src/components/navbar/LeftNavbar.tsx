import React, { useState } from 'react';

interface ILeftNavbarProps {
  menuOptions: {
    id: number;
    label: string;
    active: boolean;
  }[];
  handleMenuItemClick: (id: number) => void;
  getIconByLabel: (label: string, isActive: boolean) => React.ReactNode | null;
}

const LeftNavbar = ({ menuOptions, handleMenuItemClick, getIconByLabel }: ILeftNavbarProps) => {
  let scrollTimer = -1;

  const [scrollType, setScrollType] = useState<string>('hide-navbar-scroll');

  const onScroll = () => {
    setScrollType('show-navbar-scroll');
    if (scrollTimer !== -1) clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout(outScroll, 2000);
  };

  const outScroll = () => {
    setScrollType('hide-navbar-scroll');
  };
  return (
    <main className="bg-darkBlue flex flex-row w-[12rem] h-screen">
      <section className="flex flex-col h-full w-full">
        <p className="flex justify-start py-4 pl-4 text-3xl font-semibold text-green font-cormorant">Blu Brain</p>
        <div
          className="overflow-y-auto flex flex-col h-full items-start justify-start gap-y-2"
          id={scrollType}
          onScroll={onScroll}
        >
          {menuOptions.map((option) => {
            return (
              <div
                key={option.id}
                className={`${
                  option.active ? 'bg-white text-green' : 'text-black'
                } flex flex-col w-full cursor-pointer p-2 hover:bg-gray-100 hover:border hover:border-gray-100 rounded-md h-14 justify-center`}
                onClick={() => handleMenuItemClick(option.id)}
              >
                <div className="text-xl flex flex-row items-center pl-4 gap-x-2">
                  {getIconByLabel(option.label, option.active)}{' '}
                  <p className={`${option.active ? 'font-semibold text-sm' : 'font-normal text-sm'}`}>{option.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="w-[0.02rem] ml-3 bg-gray-400" />
    </main>
  );
};

export default LeftNavbar;
