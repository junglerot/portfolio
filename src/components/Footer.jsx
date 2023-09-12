import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_main">
          <div className="footer_1">
            <a className="navbar-brand" href="#">
              <h2>
                waleed <span>codes</span>
              </h2>
            </a>
            <p>
              Let's build something incredible together. Reach out via email or
              connect on LinkedIn and GitHub. Explore my portfolio for more.
            </p>
            <div className="ft_icon">
              <a
                href="https://www.facebook.com/waleedcodes"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.youtube.com/@waleedcodes"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/waleedcodes/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/waleedcodes"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/waleedcodes/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="footer_2">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Testimonals</a>
              </li>
            </ul>
          </div>
          <div className="footer_3">
            <h2>Leave A Message</h2>
            <div className="footer_3_input mt-4">
              <input type="email" placeholder="Email Address" required />
              <button className="btn3" type="submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ******************************************** --> */}
      <div className="footer_end">
        <p>© 2023 waleedcodes.com | All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
