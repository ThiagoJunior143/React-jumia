import BottomPage from "../bottomPage/BottomPage";
import Navbar from "../MainPage/Navbar";
import TopNav from "../MainPage/topnav";
import Cart from "./Cart";

const CartPage = () => {
    return ( 
       <section>
        <TopNav/>
        <Navbar/>     
        <Cart/>
        <BottomPage/>
       </section>
    );
}
 
export default CartPage;