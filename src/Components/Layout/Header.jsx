import "./Css/Header.css";
import "./Css/Style.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../features/cart/cartSlice";

export default function Header() {
  const [username, setUsername] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();


  useEffect(() => {
    // Truy xuất thông tin người dùng từ sessionStorage
    console.log("user",user);
    if (user && user?.user) {
      setUsername(user?.user);
    }
  }, [user?.user]);

  const handleLogout = () => {
    // Xóa thông tin người dùng khỏi sessionStorage
    sessionStorage.removeItem("user");
    setUsername('')
    // Chuyển hướng về trang đăng nhập
    navigate("/Dangnhap");
  };
  
  const cartItemsCount = useSelector(selectCartItemsCount);


  return (
    <>
      <div className="boxcenter">
        <div className="menu1">
          <form>
            <div className="column tk">
              <input name="search" placeholder="Tìm kiếm..." type="text" />
              <button type="submit">
                <span className="fa fa-search" />
              </button>
            </div>
            <div className="column">
              <h1 style={{ color: "#4CAF50" }}>CỬA HÀNG TRÁI CÂY</h1>
            </div>
            <div className="column basket">
              <button className="cart-button">
                <Link to="cart">
                  Giỏ hàng
                  <i
                    aria-hidden="true"
                    className="fa fa-shopping-basket"
                    style={{ fontSize: "20px" }}
                  />
                </Link>
                {cartItemsCount > 0 && (
                  <span id="countItem">{cartItemsCount}</span>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="row mb menu">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="#">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/products">Sản phẩm</Link>
            </li>
            <li>
              <Link to="news">Tin tức</Link>
            </li>
            <li>
              <Link to="contact">Liên hệ</Link>
            </li>
            <li>
            {username ? (
                <>Chào mừng, {username}!
                  <button onClick={handleLogout}>Đăng xuất</button>
                </>
              ) : (
                <Link to="Dangnhap">Tài khoản</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}