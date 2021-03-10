import react from "react";
import "./Home.css";
import Product from "./product";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="Home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="44556677"
            title="Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future Paperback – 14 June 2015"
            price={7.49}
            image="https://images-na.ssl-images-amazon.com/images/I/51I-QgidWHL._SX322_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="65446565"
            title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black)"
            price={350}
            image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._SX522_.jpg"
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
        </div>
      </div>
    </div>
  );
}

export default Home;
