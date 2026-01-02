import { useEffect, useState } from "react";
import api from "../api";
import { Link, Navigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/api/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div>
      {categories.map((category) => {
        const filteredProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <div className="flash-sales flash-contain" key={category}>
            <div className="sec-flash">
              <p className="f-sal">
                <span></span>
                {category}
              </p>

              <p className="see">
                See All{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </p>
            </div>

            <div className="flash-items">
              {filteredProducts.map((product) => (
                <div className="flash-card" key={product.id}>
                  <Link to={`/productdetails/${product.id}`}>
                    <p className="discount">
                      -
                      {Math.round(
                        (1 - product.price / product.slash_price) * 100
                      )}
                      %
                    </p>

                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <p className="price">{product.price}</p>
                    <p className="slash">{product.slash_price}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
