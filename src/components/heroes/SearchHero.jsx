import React,{ useContext} from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import HeroesContext from "../../context/heroes/heroesContext";
const SearchHero = () => {
  
  const heroesContext = useContext(HeroesContext);
  const { heroesFound, searchHero } = heroesContext;

  const validateHero = values => {
    //searchHeroURL(values);
    
    console.log(heroesFound)
  }

  return (
    <Formik
      initialValues={{
        hero: "",
      }}
      validate={values => validateHero(values)}
      onSubmit={values => searchHero(values) }
    >
      {({ errors }) => (
        <Form className="p-4">
          <div className="form-group d-flex">
            <Field
              type={"text"}
              id="hero"
              name="hero"
              placeholder="Buscar Heroe"
              className="form-control"
            />
            <Button type="submit" className="mx-2">Buscar</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchHero;
