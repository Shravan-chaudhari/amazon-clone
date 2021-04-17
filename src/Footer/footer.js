import React from "react";
import "./footer.css";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__up">
        <div className="container">
          <h3 className="container__title">Get to Know us</h3>
          <p className="container__component">About Us</p>
          <p className="container__component">Careers</p>
          <p className="container__component">Press Releases</p>
          <p className="container__component">Amazon Care</p>
          <p className="container__component">Gift a Smile</p>
        </div>
        <div className="container">
          <h3 className="container__title">Connect with Us</h3>
          <p className="container__component">Facebook</p>
          <p className="container__component">Twitter</p>
          <p className="container__component">Instagram</p>
        </div>
        <div className="container">
          <h3 className="container__title">Make Money with Us</h3>
          <p className="container__component">Sell on Amazon</p>
          <p className="container__component">Sell under Amazon Accelerator</p>
          <p className="container__component">Amazon Global Selling</p>
          <p className="container__component">Become an Affiliate</p>
          <p className="container__component">Fulfilment by Amazon</p>
          <p className="container__component">Advertise Your Products</p>
          <p className="container__component">Amzon Pay On Merchants</p>
          <p className="container__component">See More Make Money With Us</p>
        </div>
        <div className="container">
          <h3 className="container__title">Let Us Help You</h3>
          <p className="container__component">COVID-19 and Amazon</p>
          <p className="container__component">Your Account</p>
          <p className="container__component">Returns Centre</p>
          <p className="container__component">100% Purchase Protection</p>
          <p className="container__component">Amazon app download</p>
          <p className="container__component">Amazon Assistant Download</p>
          <p className="container__component">Help</p>
        </div>
      </div>
      <div className="footer__down">
        <CopyrightIcon className="copyIcon" />
        <p className="footer__text">All right reserved to laddoo!</p>
      </div>
    </div>
  );
}

export default Footer;
