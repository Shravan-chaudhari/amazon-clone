import react from "react";
import "./Home.css";
import ProductComponent from "./ProductComponent";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Components/QC/D21241498_IN_PC_Laptops-Components-Amazon-Home-Services_1500x300_11.jpg"
          alt=""
        />
        {/* <ImageSlider slides={SliderData} /> */}
        <div className="home__row">
          <div className="shop__component">
            <h1>
              Shop Exclusive Laptops On tech-Amazon || Gaming and productivity
            </h1>
            <ProductComponent
              img1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Revamp2021/Spotlight/D19504946_IN_PC_Laptops_Revamp-Dec_2020_440_tile_Spotlight_2.jpg"
              img2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Revamp2021/Spotlight/D19504946_IN_PC_Laptops_Revamp-Dec_2020_440_tile_Spotlight_1.jpg"
              img3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Revamp2021/Spotlight/D19504946_IN_PC_Laptops_Revamp-Dec_2020_440_tile_Spotlight_1_5.jpg"
            />
          </div>
        </div>
        <div className="home__row">
          <div className="shop__component">
            <h1>Top Deals on Mobile Phone || Apple | Asus | Oneplus</h1>
            <ProductComponent
              img1="https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/CatPage/6C/D20819578_WL_CatPage_NewWidget_hex_01._SY530_QL85_.jpg"
              img2="https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/CatPage/6C/D20819578_WL_CatPage_NewWidget_hex._SY530_QL85_.jpg"
              img3="https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/CatPage/6C/D20819578_WL_CatPage_NewWidget_SBCs-hex_s21._SY530_QL85_.jpg"
            />
          </div>
        </div>
        <div className="home__row">
          <div className="shop__component">
            <h1>Alexa for Home || Echo Show || Echo Dot </h1>
            <ProductComponent
              img1="https://images-na.ssl-images-amazon.com/images/I/41LqlKcMa4L._SY300_SX300_.jpg"
              img2="https://images-na.ssl-images-amazon.com/images/I/513BLOyHsCL._SY300_SX300_.jpg"
              img3="https://images-na.ssl-images-amazon.com/images/I/61nqC1yXoCL._SX679_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
