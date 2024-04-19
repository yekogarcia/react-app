import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
 const {
  name,
  email,
  password1,
  password2,
  onChange,
  resetForm,
  isValidEmail,
 } = useForm({
  name: "",
  email: "",
  password1: "",
  password2: "",
 });

 const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(event);
 };

 return (
  <div>
   <h1>Register Page</h1>
   <form noValidate onSubmit={onSubmit}>
    <input
     type="text"
     name="name"
     placeholder="Name"
     value={name}
     onChange={onChange}
     className={`${name.trim().length <= 0 && "has-error"}`}
    />
    {name.trim().length <= 0 && <span>Este campo es requerido</span>}
    <input
     type="email"
     name="email"
     placeholder="Email"
     value={email}
     onChange={onChange}
     className={`${!isValidEmail(email) && 'has-error'}`}
    />
    {!isValidEmail(email) && <span>Email no valido</span>}
    <input
     type="password"
     name="password1"
     placeholder="Password"
     value={password1}
     onChange={onChange}
     className={`${password1.trim().length <= 0 && "has-error"}`}
    />
    {password1.trim().length <= 0 && <span>Este campo es requerido</span>}
    {password1.trim().length < 6 && password2.trim().length > 0  && <span>La contraseña debe tener minimo 6 caracteres</span>}
    <input
     type="password"
     name="password2"
     placeholder="Repeat Password"
     value={password2}
     onChange={onChange}
     className={`${password2.trim().length <= 0 && "has-error"}`}
    />
     {password2.trim().length <= 0 && <span>Este campo es requerido</span>}
     {password2.trim().length < 6 && password2.trim().length > 0  && <span>La contraseña debe tener minimo 6 caracteres</span>}
    <button type="submit">Create</button>
    <button type="button" onClick={resetForm}>
     Clean
    </button>
   </form>
  </div>
 );
};
