import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentlyViewed } from "./recentview";

const RecentlyViewed = () => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    setRecent(getRecentlyViewed());
  
     const handleStorage = () => {
      setRecent(getRecentlyViewed());
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };

}, []);

  if (recent.length === 0) return null;

  return (
    <div className="flash-sales flash-contain">
      <div className="sec-flash">
        <p className="f-sal">
          <span></span>
          Recently Viewed
        </p>
        <p className="see">See all</p>
      </div>

      <div className="flash-items">
        {recent.map((product) => (
          <div className="flash-card" key={product.id}>
            <Link to={`/productdetails/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p className="title">{product.title}</p>
              <p className="price">
                ${product.price.toLocaleString()}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
