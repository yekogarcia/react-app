import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../Components";
import * as Yup from "yup";

import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type == "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type == "email") {
      schema = schema.email("Email no valido");
    }
    if(rule.type == 'minLength'){
        schema =schema.min((rule.value as any), `Mínimo de ${rule.value} caracteres`)
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Formik</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type == "input" || type == "password" || type == "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type == "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="">Seleccione</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={label}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
