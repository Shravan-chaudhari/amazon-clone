import React from "react";
import "./ProductComponent.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function ProductComponent({ img1, img2, img3 }) {
  return (
    <div className="Product__Component">
      <div className="Product__image">
        <div id="zoom-in">
          <figure>
            <img src={img1} alt="Gaming" />
          </figure>
        </div>
      </div>
      <div className="Product__image">
        <div id="zoom-in">
          <figure>
            <img src={img2} alt="Gaming" />
          </figure>
        </div>
      </div>
      <div className="Product__image">
        <div id="zoom-in">
          <figure>
            <img src={img3} alt="Gaming" />
          </figure>
        </div>
      </div>
      <div className="see__more">
        <figure id="see_more__fig">
          <h3>See More</h3>
          <ChevronRightIcon className="seemore__arr" />
        </figure>
      </div>
    </div>
  );
}

export default ProductComponent;
