import Header from "../../components/header";
import styles from "./ProductForm.module.css";

import axios from "axios";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProduct();
    } else {
      reset();
    }
  }, [id]);

  async function getProduct() {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const produto = response.data;

      setValue("title", produto.title);
      setValue("price", produto.price);
      setValue("description", produto.description);
      setValue("category", produto.category);
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
  }

  async function onSubmit(data) {
    try {
      const response = id
        ? await axios.put(`https://dummyjson.com/products/${id}`, data)
        : await axios.post("https://dummyjson.com/products/add", data);

      toast(
        id ? "Produto editado com sucesso!" : "Produto criado com sucesso!",
        {
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
        }
      );

      reset();
      {
        id ? navigate(`/products/${id}`) : navigate("/");
      }
    } catch (error) {
      toast("Erro ao salvar produto", {
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

      <h2 className={styles.title}>{id ? "Editar Produto" : "Novo Produto"}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Título:</label>
          <input
            type="text"
            className={styles.input}
            {...register("title", {
              required: "Título é obrigatório",
              maxLength: {
                value: 50,
                message: "Título deve ter no máximo 50 caracteres",
              },
            })}
          />
          {errors.title && (
            <p className={styles.error}>{errors.title.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Preço:</label>
          <input
            type="number"
            step="0.01"
            className={styles.input}
            {...register("price", {
              required: "Preço é obrigatório",
              min: {
                value: 0.01,
                message: "O preço deve ser maior que 0",
              },
            })}
          />

          {errors.price && (
            <p className={styles.error}>{errors.price.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Descrição:</label>
          <textarea
            className={styles.textarea}
            {...register("description", {
              required: "Descrição é obrigatória",
            })}
          />
          {errors.description && (
            <p className={styles.error}>{errors.description.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Categoria:</label>
          <input
            type="text"
            className={styles.input}
            {...register("category")}
          />
        </div>

        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
}
