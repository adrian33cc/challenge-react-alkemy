import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import Layout from "../components/layout/Layout";

const Login = () => {


  return (
    <Layout>
      <LoginForm/>
      <Link to="/">Ir al Home</Link>  
    </Layout>
  );
};

export default Login;
