import Container from "react-bootstrap/Container";

export const Sliding = () => {
  return (
    <Container>
      
        <div className="items-grid">
          <div className="gride">
            {/* LEFT ARROW BUTTON */}
            <div className="grid-btn">
              <i className="fa-solid fa-circle-chevron-left"></i>
            </div>

            {/* GRID IMAGES */}
            <div className="grid-img">
              <div className="grid-card">
                <img
                  src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/jumia-delivery_220x220.png"
                  alt=""
                />
                <p>Awoof of deals</p>
              </div>

              <div className="grid-card">
                <img
                  src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/awoof_220x220.png"
                  alt=""
                />
                <p>Awoof of deals</p>
              </div>

              <div className="grid-card">
                <img
                  src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/toys-games_220x220.png"
                  alt=""
                />
                <p>Awoof of deals</p>
              </div>

              <div className="grid-card">
                <img
                  src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/sporting-goods_220x220.png"
                  alt=""
                />
                <p>Awoof of deals</p>
              </div>

              <div className="grid-card">
                <img
                  src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/850.jpg"
                  alt=""
                />
                <p>Awoof of deals</p>
              </div>

              <div className="grid-card">
                <img
                  src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/banga-deals_220x220.png"
                  alt=""
                />
                <p>Awoof of deals</p>
              </div>

              <div className="grid-card" id="disappear">
                <img
                  src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/video-games_220x220.png"
                  alt=""
                />
                <p>Awoof of deals</p>
              </div>

              <div className="grid-card" id="disappear">
                <img
                  src="https://ng.jumia.is/cms/0-0-0-sandbox/thumbnails/groceries_220x220.png"
                  alt=""
                />
                <p>Awoof of deals</p>
              </div>
            </div>

            {/* RIGHT ARROW BUTTON */}
            <div className="grid-btn">
              <i className="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        </div>

    </Container>
  );
};
