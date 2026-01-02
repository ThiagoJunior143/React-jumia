import Container from "react-bootstrap/Container";
import "./mainpage.css";
import Navbar from "./Navbar";
import Cover from "../CoveredPage/coverpage";
import CoverArea from "../UncoveredPage/CoverArea";
import BottomPage from "../bottomPage/BottomPage";
import TopNav from "./topnav";

const MainPage = () => {
  return (
    <section>
      <TopNav/>
      <Navbar />
      <Cover />
      <CoverArea />
      <BottomPage />
    </section>
  );
};

export default MainPage;
