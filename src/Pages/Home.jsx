import Hero from "../Components/Hero";
import Sidebar from "../Components/Sidebar";
const Home = () => {
  return (
    <div className="flex w-full flex-row items-center">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default Home;
