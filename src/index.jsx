import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sinopsis  from './pages/Info.jsx';
import Layout  from './pages/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import reportWebVitals from './reportWebVitals';

function App() {


  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="Sinopsis" element={<Sinopsis />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
