import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Login = () => {
  return (
    <Layout>
      <h1>Pagina My Team</h1>
      <Link to="/">Ir al Login</Link>
    </Layout>
  );
};

export default Login;
