import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Css/Style.css";
import Banner from "./Banner";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
export default function NewPro() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };
    fetchProducts();
  }, []);

  const Pro = products.slice(8, 16).map((Pro, index) => (
    <div className="boxsp ml10" key={index}>
      <div className="row img">
        <img alt="" src={`/layout/images/${Pro.img}`} />
      </div>
      <p>
        <span>{Pro.price}</span>
      </p>
      <a className="text" href="#">
        {Pro.name}
      </a>
      {/* <input defaultValue="1" max="10" min="1" name="soluong" type="number" />
      <input defaultValue="" type="hidden" /> */}
      <button className="addCart" onClick={() => handleAddToCart(Pro)}>
        Đặt hàng
      </button>
    </div>
  ));
  return (
    <>
      <Banner />
      <div className="boxcenter">
        <div className="row mb">
          <div className="row">{Pro}</div>
        </div>
      </div>
    </>
  );
}
