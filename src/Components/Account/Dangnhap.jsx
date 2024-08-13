import "../Layout/Css/account.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dangnhap() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const switchToRegister = document.getElementById("switch-to-register");
    const switchToLogin = document.getElementById("switch-to-login");
    const loginForm = document.querySelector(".container");
    const registrationForm = document.getElementById("registration-form");

    switchToRegister.addEventListener("click", () => {
      loginForm.style.display = "none";
      registrationForm.style.display = "block";
    });

    switchToLogin.addEventListener("click", () => {
      registrationForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email: loginEmail,
        password: loginPassword,
      });
      console.log("Đăng nhập thành công:", response.data);
      // Lưu token và chuyển hướng đến trang chủ
      sessionStorage.setItem('user', JSON.stringify(response.data));
      window.alert('Đăng nhập thành công');
      navigate('/');
    } catch (error) {
      console.error("Đăng nhập thất bại:", error.response.data);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/users/register", {
        email: registerEmail,
        password: registerPassword,
        username: registerUsername,
      });
      console.log("Đăng ký thành công:", response.data);
      // Chuyển hướng đến trang đăng nhập
      window.alert('Đăng ký thành công');
      location.reload('/Dangnhap');
    } catch (error) {
      console.error("Đăng ký thất bại:", error.response.data);
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <h1 className="h1">Đăng nhập</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="login-email">Email:</label>
            <input
              className="input"
              id="login-email"
              name="login-email"
              placeholder="Nhập email của bạn"
              required
              type="text"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label htmlFor="login-password">Mật khẩu:</label>
            <input
              className="input"
              id="login-password"
              name="login-password"
              placeholder="Nhập mật khẩu của bạn"
              required
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className="button" type="submit">
              Đăng nhập
            </button>
          </form>
          <div className="switch-form">
            <p>
              Không có tài khoản?{" "}
              <a href="#" id="switch-to-register">
                Đăng ký tại đây
              </a>
            </p>
          </div>
        </div>
        <div
          className="container"
          id="registration-form"
          style={{ display: "none" }}
        >
          <h1 className="h1">Tạo tài khoản</h1>
          <form onSubmit={handleRegister}>
            <label htmlFor="register-username">Họ và tên:</label>
            <input
              className="input"
              id="register-username"
              name="register-username"
              placeholder="Nhập họ và tên"
              required
              type="text"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <label htmlFor="phone">Số điện thoại:</label>
            <input
              className="input"
              id="phone"
              name="phone"
              placeholder="Nhập số điện thoại của bạn"
              required
              type="text"
              value={registerPhone}
              onChange={(e) => setRegisterPhone(e.target.value)}
            />
            <label htmlFor="register-email">Email:</label>
            <input
              className="input"
              id="register-email"
              name="register-email"
              placeholder="Nhập email của bạn"
              required
              type="text"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <label htmlFor="register-password">Mật khẩu:</label>
            <input
              className="input"
              id="register-password"
              name="register-password"
              placeholder="Nhập mật khẩu"
              required
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button className="button" type="submit">
              Đăng ký
            </button>
          </form>
          <div className="switch-form">
            <p>
              Bạn đã có tài khoản?{" "}
              <a href="#" id="switch-to-login">
                Đăng nhập tại đây
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
