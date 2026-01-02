import Container from "react-bootstrap/esm/Container";

const TopNav = () => {
  return (
    <section>
      <div className="top-head" style={{ backgroundColor: "#20ac76" }}>
        <Container>
          <div>
            <div className="top-banner"></div>
          </div>
        </Container>
      </div>

      <div className="top-nav">
        <Container>
          <div className="navber">
            <div className="sallll">
              <a className="sall" href="">
                <span>
                  <img
                    className="icon"
                    src="/Images/Jumia-Icon-removebg-preview.png"
                    alt=""
                  />
                </span>
                Sell on Jumia
              </a>
            </div>
            <div className="nav-image ">
              <div className="img-content">
                <img
                  style={{ width: "15%" }}
                  src="/Images/Jumia.logo-removebg-preview.png"
                  alt=""
                />
                <img
                  style={{ width: "15%" }}
                  src="/Images/jumia-pay-removebg-preview.png"
                  alt=""
                />

                <img
                  style={{ width: "15%" }}
                  src="/Images/jumia-deliver-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default TopNav;
