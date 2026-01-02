import Container from "react-bootstrap/Container";

const FlashPage = () => {
  return (
    <Container>
      <div className="flash-contain">
        <div className="flash-sales">
          {/* FLASH SALES HEADER */}
          <div className="time-flash">
            <p className="f-sal">
              <span></span> Flash Sales
            </p>
            <p>Time Left: 17h : 44m : 50s</p>
            <p className="see">
              See All{" "}
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </p>
          </div>

          {/* FLASH SALES ITEMS */}
          <div className="flash-items">
            <div className="flash-card">
              <p className="discount">-9%</p>
              <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/797234/1.jpg?9713"
                alt=""
              />
              <p>Synix 2.2l Electric Kettle ...</p>
              <p className="price">$ 6,100</p>
              <p className="slash">$ 6,369</p>
              <p>50 items left</p>
              <div className="fill"></div>
            </div>

            <div className="flash-card">
              <p className="discount">-9%</p>
              <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/5281904/1.jpg?1278"
                alt=""
              />
              <p>Synix 2.2l Electric Kettle ...</p>
              <p className="price">$ 6,100</p>
              <p className="slash">$ 6,369</p>
              <p>50 items left</p>
              <div className="fill"></div>
            </div>

            <div className="flash-card">
              <p className="discount">-9%</p>
              <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/1149363/1.jpg?4917"
                alt=""
              />
              <p>Synix 2.2l Electric Kettle ...</p>
              <p className="price">$ 6,100</p>
              <p className="slash">$ 6,369</p>
              <p>50 items left</p>
              <div className="fill"></div>
            </div>

            <div className="flash-card">
              <p className="discount">-9%</p>
              <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/1243821/1.jpg?4414"
                alt=""
              />
              <p>Synix 2.2l Electric Kettle ...</p>
              <p className="price">$ 6,100</p>
              <p className="slash">$ 6,369</p>
              <p>50 items left</p>
              <div className="fill"></div>
            </div>

            <div className="flash-card" id="disappear">
              <p className="discount">-9%</p>
              <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/4106404/1.jpg?8449"
                alt=""
              />
              <p>Synix 2.2l Electric Kettle ...</p>
              <p className="price">$ 6,100</p>
              <p className="slash">$ 6,369</p>
              <p style={{ fontSize: "0.8em" }}>50 items left</p>
              <div className="fill"></div>
            </div>

            <div className="flash-card" id="disappear">
              <p className="discount">-9%</p>
              <img
                src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/9178004/1.jpg?6304"
                alt=""
              />
              <p>Synix 2.2l Electric Kettle ...</p>
              <p className="price">$ 6,100</p>
              <p className="slash">$ 6,369</p>
              <p style={{ fontSize: "0.8em" }}>50 items left</p>
              <div className="fill"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FlashPage;
