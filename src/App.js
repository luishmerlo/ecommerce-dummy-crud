import "./styles.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import ProductList from "./pages/product-list";
import ProductForm from "./pages/product-form";
import ProductDetail from "./pages/product-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/novo/:id?",
    element: <ProductForm />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
