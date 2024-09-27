import Banner from "../components/Banner/Banner";
import BillSection from "../components/BillSection/BillSection";
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
          <BillSection/>
        </>
    );
};

export default Main;