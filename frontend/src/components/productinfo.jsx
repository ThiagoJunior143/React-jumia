import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import api from "../api";
import { useParams } from "react-router-dom";
import "./productinfo.css";
import { addRecentlyViewed } from "./recentview";
import { useCart } from "../context/Cartcontext";
import RecentlyViewed from "./viewedproducts";

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { cartItems, addToCart, IncreaseQuantity, decreaseQuantity,} = useCart();

  useEffect(() => {
    // Public API call: no token required
    api
      .get(`/api/products/${id}/`)
      .then((res) => {
        setProduct(res.data);
        addRecentlyViewed(res.data);
      })
      .catch((err) => {
        console.log("API error:", err.response?.status, err.response?.data);
      });
  }, [id]);

  const cartItem = cartItems.find((item) => item.id === product?.id);

  return (
    <section className="detail">
      <Container>
        {product && (
          <div className="product-detail">
            <div className="detail-item">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="detail-item">
              <p>{product.title}</p>
              <p>${product.price}</p>

              {!cartItem ? (
                <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              ) : (
                <>
                  <div className="d-flex justify-content-between belel align-items-center">
                    <button className="cal-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button className="cal-btn" onClick={() => IncreaseQuantity(product.id)}>+</button>
                  </div>
                  
                </>
              )}
            </div>

          
          </div>
        )}
      
       <RecentlyViewed/>
      </Container>
    </section>
  );
};

export default ProductInfo;
