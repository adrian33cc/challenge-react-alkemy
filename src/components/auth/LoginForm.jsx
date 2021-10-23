import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import clienteAxios from "../../config/axios";

const LoginForm = () => {
  const validateData = (values) => {
    let errores = {};
    if (!values.email) {
      errores.email = "No has escrito nada";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errores.email = "Invalid email address";
    }

    if (!values.password) {
      errores.password = "No has escrito nada";
    }

    return errores;
  };

  const postDataUser = async (values) => {
    try {
      const response = await clienteAxios.post('/',values);
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center box ">
        <Col md={4} className="formulario">
          <h1 className="text-center p-2">Iniciar Sesión</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => validateData(values)}
            onSubmit={(values) => postDataUser(values) }
          >
            {({ errors }) => (
              <Form className="p-2 ">
                <div className="form-group mb-2 ">
                  <label className="form-label">Email</label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="correo@correo.com"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <p className="text-danger   p-2"> {errors.email} </p>
                    )}
                  />
                </div>
                <div className="form-group mb-2 ">
                  <label className="form-label">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="react"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <p className="text-danger   p-2"> {errors.password} </p>
                    )}
                  />
                </div>
                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
