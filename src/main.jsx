import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "@/styles/app.css";
import MainLayout from "./apps/mainLayout.jsx";



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MainLayout />
  </Provider>
);
