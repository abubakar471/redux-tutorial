import HomeRightPanel from "../components/homeRightPanel/HomeRightPanel";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="w-full flex mt-8">
      <div className="w-2/12 h-[95vh]">
        <Sidebar />
      </div>

      <div className="w-10/12 ">
        <HomeRightPanel />
      </div>
    </div>
  );
};

export default Home;
