import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        alt=""
      ></img>

      <div className="home_row">
        <Product
          id="12345"
          title="Apple iPhone 11 (128GB) - Black"
          rating={5}
          price={73600.05}
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
        />
        <Product
          id="12346"
          title="OnePlus 8 5G (Glacial Green 6GB RAM+128GB Storage)"
          rating={4}
          price={41999.0}
          image="https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12347"
          title="Apple AirPods with Wireless Charging Case"
          rating={5}
          price={17999.0}
          image="https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._SL1500_.jpg"
        />
        <Product
          id="12348"
          title="Samsung 253L 2 Star Inverter Frost Free Double Door Refrigerator"
          rating={3}
          price={24090.0}
          image="https://images-na.ssl-images-amazon.com/images/I/7140rbJD8ZL._SL1500_.jpg"
        />
        <Product
          id="12349"
          title="Aristocrat Volt Nxt Polyester 55 cms Blue Travel Duffle"
          rating={4}
          price={1316.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81zOrxKQlsL._SL1500_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="12340"
          title="Sony Bravia 101.6 cm (40 inches) Full HD LED TV KLV-40R352F (Black) | With Amazon Fire Stick at Zero Cost"
          rating={4}
          price={29999.0}
          image="https://images-na.ssl-images-amazon.com/images/I/817Z1q3zTWL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
