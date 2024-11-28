import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffffff", 
      }}
    >
      <div
        style={{
          backgroundColor: "#2c2c2c", 
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          color: "#ffffff", 
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#ff4d4d" }}>Giriş Yap</h2>
        <form>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                color: "#ff4d4d", 
              }}
            >
              E-Posta:
            </label>
            <input
              type="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #555",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#3c3c3c", 
                color: "#ffffff",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
                color: "#ff4d4d", 
              }}
            >
              Şifre:
            </label>
            <input
              type="password"
              name="password"
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #555",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "#3c3c3c", 
                color: "#ffffff",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#ff4d4d", 
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Giriş Yap
          </button>
        </form>
        <div style={{ marginTop: "20px" }}>
          <span style={{ color: "#bbbbbb" }}>Hesabınız yok mu? </span>
          <Link
            to="/register"
            style={{
              color: "#ff4d4d",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
