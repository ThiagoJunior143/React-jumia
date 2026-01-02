import Container from "react-bootstrap/Container";

const Social = () => {
  return (
    <section className="socials">
      <Container>
        <div className="social-contain">
          {/* ================= LEFT GRID: HELP, LINKS, ABOUT ================= */}
          <div className="help-center">
            <div className="help-mee">
              <h5>Need Help ?</h5>
              <ul>
                <li>
                  <a href="">Chat with us</a>
                </li>
                <li>
                  <a href="">Chat with us</a>
                </li>
                <li>
                  <a href="">Chat with us</a>
                </li>
              </ul>

              <h5>USEFUL LINKS</h5>
              <ul>
                {Array.from({ length: 11 }).map((_, i) => (
                  <li key={i}>
                    <a href="">Chat with us</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5>ABOUT JUMIA</h5>
              <ul>
                {Array.from({ length: 11 }).map((_, i) => (
                  <li key={i}>
                    <a href="">Chat with us</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5>MAKE MONEY WITH JUMIA</h5>
              <ul>
                <li>
                  <a href="">Chat with us</a>
                </li>
                <li>
                  <a href="">Chat with us</a>
                </li>
                <li>
                  <a href="">Chat with us</a>
                </li>
              </ul>
            </div>

            <div>
              <h5>JUMIA INTERNATIONAL</h5>

              <div className="countries">
                <ul>
                  <li>
                    <a href="">Algeria</a>
                  </li>
                  <li>
                    <a href="">Algeria</a>
                  </li>
                  <li>
                    <a href="">Algeria</a>
                  </li>
                  <li>
                    <a href="">Algeria</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="">Algeria</a>
                  </li>
                  <li>
                    <a href="">Algeria</a>
                  </li>
                  <li>
                    <a href="">Algeria</a>
                  </li>
                  <li>
                    <a href="">Algeria</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= SOCIAL MEDIA ================= */}
          <div className="join-social">
            <h5>JOIN US ON</h5>

            <div className="social-icons">
              {[...Array(5)].map((_, i) => (
                <a href="" key={i}>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              ))}
            </div>
          </div>

          {/* ================= SPONSORS ================= */}
          <div className="sponsor">
            <a href="">ADIDAS</a>
            <a href="">Nike</a>
          </div>

          <hr style={{ marginTop: "50px" }} />

          {/* ================= FOOTER LOGOS ================= */}
          <div className="footer">
            <div className="copyright">
              <img
                src="/Images/jumia-pay-rembg-preview.png"
                alt=""
                style={{ width: "100%" }}
              />

              <img
                src="/Images/jumia-deliver-removebg-preview.png"
                alt=""
                style={{ width: "20vh", display: "none" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Social;
