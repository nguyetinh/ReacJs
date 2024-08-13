import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProDetail() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const { id } = useParams();
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

  const ProDetail = products.find((dpro) => dpro.id === parseInt(id));

  if (!ProDetail) {
    return <div>Sản phẩm không tồn tại</div>;
  }
  return (
    <>
      <div class="boxcenter">
        <div className="product-detail">
          <div className="product-image">
            <img alt={ProDetail.name} src={`/layout/images/${ProDetail.img}`} />
          </div>
          <div className="product-info">
            <h2>{ProDetail.name}</h2>
            <p>{ProDetail.description}</p>
            <p>
              Giá: <span>{ProDetail.price} VND</span>
            </p>
            <button className="order-button" onClick={() => handleAddToCart(ProDetail)}>Đặt Hàng</button>
          </div>
        </div>
      </div>
    </>
  );
}
