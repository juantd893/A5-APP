import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import App from "../pages/index.js";
import Sinopsis from "../pages/Sinopsis.js";



export default function Navigation() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="Sinopsis" element={<Sinopsis />} />

          </Route>
        </Routes>
      </BrowserRouter>
    );
  }