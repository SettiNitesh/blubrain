interface IDashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: IDashboardProps) => {
  return <div>{children}</div>;
};

export default Dashboard;
