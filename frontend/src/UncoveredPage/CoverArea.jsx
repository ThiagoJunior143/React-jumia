import Container from "react-bootstrap/Container";
import "./CoverArea.css"
import Category from "./Category";
import JumiaWriteUp from "./write-up";
import Product from "./Product";
import RecentlyViewed from "../components/viewedproducts";

const CoverArea = () => {
    return ( 
    <section className="covered-area">
    <Container>
         <Category/>
         <Product /> 
         <RecentlyViewed/>
         <JumiaWriteUp/> 
         
    </Container> 
    </section>
    );
}
 
export default CoverArea;