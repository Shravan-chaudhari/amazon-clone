import react from "react";
import "./Home.css";
import ProductComponent from "./ProductComponent";
import gaming from "./images/gaming.jpg";
// import { Link } from "react-router-dom";
// import ImageSlider from "../Slider/Slider";
// import { SliderData } from "../Slider/SliderData";

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
        {/* <div className="home__row">
          <Product
            id="44556677"
            title="Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future Paperback – 14 June 2015"
            price={7.49}
            image="https://images-na.ssl-images-amazon.com/images/I/51I-QgidWHL._SX322_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="65446565"
            title="Dell P Series 24-inch (60.96 cm) Screen Full HD (1080p) LED-Lit Monitor with IPS Panel - P2419H (Black)"
            price={172}
            image="https://images-na.ssl-images-amazon.com/images/I/91ddm%2BP-VCL._SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="45545454"
            title="Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
            price={1700}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SX679_.jpg"
            rating={5}
          />
          <Product
            id="84858969"
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={999}
            image="https://images-na.ssl-images-amazon.com/images/I/81oFAZ9N6bL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="72362145"
            title="Logitech MX Master 3 Wireless Mouse, Ultrafast Scrolling, Use on Any Surface, Ergonomic, 4000 Dpi, Customisation, USB-C, Bluetooth/USB, Apple Mac iPad OS Microsoft PC Windows Linux, Dark Grey"
            price={125}
            image="https://images-na.ssl-images-amazon.com/images/I/613a-3jtieL._SX522_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="75561554"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)20R1S05400"
            price={2100}
            image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
            rating={5}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
