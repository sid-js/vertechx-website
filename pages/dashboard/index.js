
import dynamic from "next/dynamic";

const App = dynamic(() => import("../../admin/App"), { ssr: false });

const Dashboard = () => {
  return <App />;
};

export default Dashboard;