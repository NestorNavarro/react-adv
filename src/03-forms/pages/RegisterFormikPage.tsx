import * as Yup from "yup";
import { Formik, Form } from "formik";

import { MyTextInput } from "../components";
import "../styles/styles.css";

interface RegisterInpts {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

const RegisterFormikPage = () => {
    const initialValues : RegisterInpts = {
        name: "",
        email: "",
        password1: "",
        password2: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "El nombre debe de ser de 3 caracter o más")
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Es Requerido"),
        email: Yup.string()
            .email("Debe de tener un formato correcto")
            .required("Es Requerido"),
        password1: Yup.string()
            .min(6, "Debe de tener al menos 6")
            .required("Es Requerido"),
        password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las constraseñas deben ser iguales")
            .required("Es Requerido"),
    });


    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput label="Name" name="name" />
                            <MyTextInput label="Email Address" name="email" type="email" />
                            <MyTextInput label="Password" name="password1" type="password" />
                            <MyTextInput label="Confirm Password" name="password2" type="password" />

                            <button type="submit">Create</button>
                            <button type="button" onClick={formik.handleReset}>Reset Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default RegisterFormikPage