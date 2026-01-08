import Header from "../../components/header";
import styles from "./ProductList.module.css";

import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  async function getProducts() {
    try {
      setCarregando(true);

      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      toast("Erro ao buscar produtos", {
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
    getProducts();
  }, []);

  async function deleteProduct(id) {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);

      setProducts(products.filter((produto) => produto.id !== id));

      toast("Produto excluído com sucesso!", {
        style: {
          background: "green",
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
    } catch (error) {
      toast("Erro ao excluir produto", {
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
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      {carregando ? (
        <p className={styles.loading}>Carregando produtos...</p>
      ) : (
        <div className={styles.productsList}>
          {products.map((produto) => (
            <div key={produto.id} className={styles.productCard}>
              <Link
                to={`/products/${produto.id}`}
                className={styles.productLink}
              >
                <p className={styles.productTitle}>{produto.title}</p>
              </Link>
              <p className={styles.productPrice}>Preço: ${produto.price}</p>
              <div className={styles.productContent}>
                <img
                  src={produto.thumbnail}
                  alt={produto.title}
                  className={styles.thumbnail}
                />
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.editButton}
                    onClick={() => navigate(`/novo/${produto.id}`)}
                  >
                    Editar
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteProduct(produto.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
