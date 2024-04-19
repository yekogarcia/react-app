import { Formik, Form } from "formik";
import * as Yup from "yup";
import {MyTextInput, MyCheckbox, MySelect} from '../Components'

import "../styles/styles.css";
// import { MyTextInput } from "../Components/MyTextInput";
// import { MySelect } from "../Components/MySelect";
// import { MyCheckbox } from "../Components/MyCheckbox";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().email("Email no valido").required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["prueba1"], "No pude seleccionar esa opción")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder=" First Name"
            />
            <MyTextInput label="Last Name" name="lastName" />
            <MyTextInput label="Email" name="email" type="email" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Seleccione</option>
              <option value="prueba1">prueba1</option>
              <option value="2">prueba2</option>
              <option value="3">prueba3</option>
            </MySelect>

            <MyCheckbox label="Termns and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
