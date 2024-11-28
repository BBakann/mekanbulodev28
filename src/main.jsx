import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Template from "./components/Template";
import Home from "./components/Home";
import VenueDetail from "./components/VenueDetail";
import AddComment from "./components/AddComment";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="venue/:id" element={<VenueDetail />} />
          <Route path="venue/:id/comment/new" element={<AddComment />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </Provider>
);
