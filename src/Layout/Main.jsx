import Banner from "../components/Banner/Banner";
import Reward from "../components/Reward/Reward";
import Navbar from "../components/shared/Navbar/Navbar";
import UserSection from "../components/UserSection/UserSection";

const Main = () => {
    return (
        <>
          <Navbar/> 
          <Banner/>
          <UserSection/>
          <Reward/>
        </>
    );
};

export default Main;