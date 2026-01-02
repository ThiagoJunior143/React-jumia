import Container from "react-bootstrap/Container";

const Download = () => {
  return (
    <section className="download">
      <Container>
        <div className="sign-contain">
          <div className="ccc">
            {/* Left: Logo + Newsletter */}
            <div className="cccd" style={{width: "20%"}}>
              <img
                src="/Images/jumia-black-removebg-preview.png"
                alt="Jumia Logo"
                className="downlogo"
              />
            </div>

            <div className="cccd" style={{width: "43%"}}>
              <form>
                <h6>New to Jumia</h6>
                <p>
                  Subscribe to our newsletter to get updates on our latest
                  offers!
                </p>

                <div className="bottom-flex form-submit">
                  <input
                    placeholder="Enter E-mail Address"
                    type="text"
                    className="text-in"
                  />
                  <button type="submit">Subscribe</button>
                </div>

                <div className="bottom-flex check-area">
                  <input type="checkbox" className="check-in" />
                  <div>
                    <p className="check-paragraph">
                      I agree to Jumia’s Privacy and Cookie Policy. You can
                      unsubscribe from newsletters at any time.
                    </p>
                    <p className="check-paragraph">I accept the legal Terms</p>
                  </div>
                </div>
              </form>
            </div>

            {/* Right: App Download Area */}
            <div className="cccd" style={{width: "30%"}}>
              <div className="bottom-flex">
                <img
                  src="/Images/jumia-starclose.png"
                  alt="Jumia App"
                  className="starimg"
                />

                <div>
                  <h6>Download Jumia App Free</h6>
                  <p>Get access to exclusive offers</p>
                </div>
              </div>

              <div className="bottom-flex app-store">
                <a  href="#">Download on the App Store</a>
                <a href="#">Get it on Google Play</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Download;
