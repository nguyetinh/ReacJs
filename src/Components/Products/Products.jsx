// src/components/Brand.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const { category } = useParams();

  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("There was an error fetching the categories!", error);
      }
    };
    fetchCategories();
  }, []);
  var titlePage = "";
  var dssp = [];

  if (category) {
    const Cate = categories.find((item) => item.id === parseInt(category));
    if (Cate) {
      const categoryName = Cate.name;
      titlePage = categoryName;
    } else {
      titlePage = "Tất cả sản phẩm";
    }
    dssp = products.filter((pro) => pro.category === parseInt(category));
  } else {
    dssp = products;
  }

  const Cate = categories.map((cate, index) => (
    <Link
      style={{ textDecoration: "none" }}
      to={`/products/category/${cate.id}`}
      className="product-item"
      key={index}
    >
      <img alt="Product 1" src={`/public/layout/images/${cate.img}`} />
      <div className="product-info">
        <h3>
          <a className="category" href="#">
            {cate.name}
          </a>
        </h3>
      </div>
    </Link>
  ));


  const Pro = dssp.map((Pro, index) => (
    <div className="boxsp ml10" key={index}>
      <div className="row img">
        <Link to={`/Detail/${Pro.id}`} className="img">
          <img alt="" src={`/layout/images/${Pro.img}`} />
        </Link>
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
      <div class="boxcenter">
        <div className="row menudoc mb">
          <div className="product-catalog">{Cate}</div>
        </div>
        <div className="row mb">
          <h2 className="titlePage">{titlePage}</h2>
          <div className="row">{Pro}</div>
        </div>
      </div>
    </>
  );
};

export default Products;
