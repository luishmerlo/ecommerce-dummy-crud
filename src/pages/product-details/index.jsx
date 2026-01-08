import Header from "../../components/header";
import styles from "./ProductDetails.module.css";

import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [carregando, setCarregando] = useState(false);

  async function getProduct() {
    try {
      setCarregando(true);

      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      toast("Erro ao buscar produto", {
        style: {
          background: "red",
          color: "#fff",
        },
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setCarregando(false);
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <Header />

      <h2 className={styles.title}>{product.title}</h2>

      <div className={styles.infoGroup}>
        <p>
          <strong>Marca:</strong> {product.brand}
        </p>
        <p>
          <strong>Código:</strong> {product.sku}
        </p>
        <p>
          <strong>Categoria:</strong> {product.category}
        </p>
      </div>

      <div className={styles.imagesSection}>
        <h3>Imagens:</h3>
        <div className={styles.imagesList}>
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className={styles.image}
            />
          ))}
        </div>
      </div>

      <div className={styles.infoGroup}>
        <p>
          <strong>Descrição:</strong> {product.description}
        </p>
        <p>
          <strong>Preço:</strong> ${product.price}
        </p>
        <p>
          <strong>Desconto:</strong> {product.discountPercentage}%
        </p>
        <p>
          <strong>Nota:</strong> {product.rating}
        </p>
        <p>
          <strong>Estoque:</strong> {product.stock}
        </p>
        <p>
          <strong>Status:</strong> {product.availabilityStatus}
        </p>
      </div>

      <h3>Dimensões:</h3>
      <div className={styles.infoGroup}>
        <p>Largura: {product.dimensions?.width}cm</p>
        <p>Altura: {product.dimensions?.height}cm</p>
        <p>Profundidade: {product.dimensions?.depth}cm</p>
        <p>Peso: {product.weight}kg</p>
      </div>

      <div className={styles.infoGroup}>
        <p>
          <strong>Garantia:</strong> {product.warrantyInformation}
        </p>
        <p>
          <strong>Envio:</strong> {product.shippingInformation}
        </p>
        <p>
          <strong>Política de devolução:</strong> {product.returnPolicy}
        </p>
        <p>
          <strong>Quantidade mínima:</strong> {product.minimumOrderQuantity}
        </p>
      </div>

      <h3>Avaliações:</h3>
      <div className={styles.reviewsSection}>
        {product.reviews?.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <p>
              <strong>{review.reviewerName}</strong> - Nota: {review.rating}/5
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
