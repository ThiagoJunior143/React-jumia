import Container from "react-bootstrap/Container";

const Carcel = () => {
  return ( <section>
  <Container className="items-contain">
    <div className="items">

      {/* FIRST ITEMS LIST */}
      <div className="items-sale" id="first">
        <ul className="sales">
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Appliances</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Phones & Tablets</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Health & Beauty</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Electronics</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Fashion</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Supermarket</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Computing</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Baby Products</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Gaming</a>
          </li>
          <li>
            <a href="#"><span></span> Musical Instruments</a>
          </li>
          <li>
            <a href="#"><span><i className="fa-solid fa-mobile-screen"></i></span> Other Categories</a>
          </li>
        </ul>
      </div>

      {/* CAROUSEL */}
      <div className="items-sale" id="second">
        <div
          id="carouselExampleAutoplaying"
          className="carousel carousel-fade slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {[...Array(8)].map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : undefined}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {[
              "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week-30/TV-push/Live-now/Artboard-1.gif",
              "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/Must-have-clothing/Artboard-1.png",
              "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/July/712X384.jpg",
              "https://ng.jumia.is/cms/0-1-initiatives/flashsale/2024/Desktop_Homepage_Slider__712x384.jpg",
              "https://ng.jumia.is/cms/0-1-initiatives/Jumia-delivery/712X384.png",
              "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/July/Nivea/Stay-soft/712x384.jpg",
              "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/01-cpr/July/Fashion/DesktopHomepageSlider_12x384.jpg",
              "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week-28/Large-Appliances-Sales/712x384.png"
            ].map((src, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <img src={src} className="d-block" alt="slide" />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* THIRD COLUMN */}
      <div className="items-sale" id="disappear">
        <div className="call">
          <div className="call-item">
            <img src="https://ng.jumia.is/cms/0-1-homepage/bsb/phone-icon-1.png" alt="" />
            <div className="to-call">
              <h4>CALL TO ORDER</h4>
              <p>0700-600-0000,020188...</p>
            </div>
          </div>

          <div className="call-item">
            <img src="https://ng.jumia.is/cms/0-1-homepage/bsb/icone-seller-1.png" alt="" />
            <h3>Sell on Jumia</h3>
          </div>

          <div className="call-item">
            <img src="https://ng.jumia.is/cms/0-1-homepage/bsb/delivery-new.jpg" alt="" />
            <h3>Send Your Packages</h3>
          </div>
        </div>

        <div className="third">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif"
            alt=""
          />
        </div>
      </div>

    </div>
  </Container>
</section>
 );
}
 
export default Carcel;