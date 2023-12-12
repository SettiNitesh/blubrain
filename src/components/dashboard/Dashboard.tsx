import { LeftNavBarContainer } from '../../containers';

interface IDashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: IDashboardProps) => {
  return (
    <div className="grid h-screen grid-cols-[min-content,1fr] grid-rows-[4rem,1fr] bg-whiteGray overflow-hidden">
      {/* Left Navbar */}
      <div className="h-[100vh]">
        <LeftNavBarContainer />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
