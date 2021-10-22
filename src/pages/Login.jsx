import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Login = () => {
  return (
    <Layout>
      <h1>Pagina Login</h1>
      <Link to="/myteam">Ir al Myteam</Link>
    </Layout>
  );
};

export default Login;
