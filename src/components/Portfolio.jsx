import React from "react";

import img1 from "../assets/portfolio/1.png";
import img2 from "../assets/portfolio/2.png";
import img3 from "../assets/portfolio/3.png";
import img4 from "../assets/portfolio/4.png";
import img5 from "../assets/portfolio/5.png";
import img6 from "../assets/portfolio/6.png";
import img7 from "../assets/portfolio/7.png";
import img8 from "../assets/portfolio/8.png";
import img9 from "../assets/portfolio/9.png";
import img10 from "../assets/portfolio/10.png";
import img11 from "../assets/portfolio/11.png";
import img12 from "../assets/portfolio/12.png";
import img13 from "../assets/portfolio/13.png";
import img14 from "../assets/portfolio/14.png";
import img15 from "../assets/portfolio/confectionery shop.png";
// import img14 from "../assets/portfolio/14.png";
// import img14 from "../assets/portfolio/14.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const Portfolio = () => {
  const handleblog = () => {
    document.getElementById("portfolio_col1").style.display = "flex";
    document.getElementById("portfolio_col2").style.display = "flex";
    document.getElementById("portfolio_col3").style.display = "flex";
    document.getElementById("btn3").style.display = "none";
  };
  return (
    <>
      <div className="section4">
        <div className="container gx-0 px-3 px-md-0">
          <div className="row text-center gx-0">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h1 className="sec4_h1">
                <img src={icon1} alt="" />
                PORTFOLIO
                <img src={icon2} alt="" />
              </h1>
              <p className="px-2 px-md-5 sec4_p">
                Explore my diverse portfolio showcasing web projects ranging
                from responsive websites to dynamic web applications,
                highlighting creativity, functionality, and user experience.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row gx-0 py-4">
            <div className="row gx-0">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img12} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Digital and Creative Agency</h4>
                      <p>Completed with With React JS</p>
                      <a
                        href="https://draft.co.jp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img13} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Community engagement and urban development</h4>
                      <p> Completed With Next JS</p>
                      <a
                        href="https://www.ideallynewrochelle.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-1 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img14} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Offer a variety of charter bus service</h4>
                      <p>Completed with Wordpress and php</p>
                      <a
                        href="https://hoshino-hm.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0 ">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img1} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4> Address the aging society </h4>
                      <p>Completed With HTML | Bootstrap 5 and React </p>
                      <a
                        href="http://ohmiya-holdings.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img2} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Comprehensive and convenient online shopping </h4>
                      <p>Completed With React, JavaScript and AWS </p>
                      <a
                        href="https://www.ozon.ru/?__rr=1&abt_att=1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img3} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Distance learning opportunities</h4>
                      <p>Completed With Vue.JS and Django </p>
                      <a
                        href="https://Kongleungcodes.github.io/B-UtopiaTemp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0" id="portfolio_col1">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img4} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Innovative communication services</h4>
                      <p>Completed With HTML | CSS and Wordpress </p>
                      <a
                        href="https://www.all-connect.jp/recruit/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img5} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Provide authentic Japanese products and cultural </h4>
                      <p>Completed With HTML | CSS and Shopify  </p>
                      <a
                        href="https://www.direct-nagomi.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img6} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Decentralized exchange platform(DEX)</h4>
                      <p>Completed With Next.js and Ox protocol </p>
                      <a
                        href="https://0x-auction-beta.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0" id="portfolio_col2">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img7} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4> A range of advanced dental treatments</h4>
                      <p>Completed With HTML | CSS and WordPress</p>
                      <a
                        href="https://www.absboston.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img8} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Decentralized and transparent lending and borrowing platform</h4>
                      <p>Completed With Typescript, Solidity and Web3 </p>
                      <a
                        href="https://app.wepiggy.com/markets"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img9} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4> Health benefits, Recipes, and Expert advice</h4>
                      <p>Completed With React and Django </p>
                      <a
                        href="https://ketone.com/pages/main"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-0" id="portfolio_col3">
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img10} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Individuals live their best lives</h4>
                      <p>Completed with Shopify</p>
                      <a
                        href="https://melissaambrosini.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img11} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>Specializing in Asian beauty products</h4>
                      <p>Completed With Shopify </p>
                      <a
                        href="https://aesthacosmetics.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
                <div className="s4_1">
                  <img src={img15} alt="" className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <h4>お菓子を注文するためのオンラインショップ</h4>
                      <p>WordPressで完成 </p>
                      <a
                        href="https://www.s-swiss.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn2 py-2 mt-3 fs-6">
                          Read More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-4 d-flex justify-content-center">
            <button
              className="btn3 border-0 mt-3"
              id="btn3"
              onClick={handleblog}
            >
              Show More ...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
