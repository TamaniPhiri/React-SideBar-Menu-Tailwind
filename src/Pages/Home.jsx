import Hero from "../Components/Hero";
import Sidebar from "../Components/Sidebar";
const Home = () => {
  return (
    <div className="flex px-4 md:px-8 py-4 w-full flex-row items-center">
      <Sidebar />
      <Hero />
    </div>
  );
};

export default Home;
