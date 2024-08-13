import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const cartIt = cartItems.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        <img
          alt=""
          src={`/layout/images/${item.img}`}
          style={{ width: "100px" }}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.price} VNĐ</td>
    </tr>
  ));

  return (
    <div className="boxcenter">
      <h1>GIỎ HÀNG</h1>
      <div>
        <div className="row mb">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody id="mycart">{cartIt}</tbody>

            <tr>
              <th colSpan="4">Tổng đơn hàng</th>
              <th >
                <div id="total">{totalAmount.toLocaleString()} VNĐ</div>
              </th>
            </tr>
          </table>
        </div>
        <div className="row mb">
          <button className="dongy" id="checkOut">
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
