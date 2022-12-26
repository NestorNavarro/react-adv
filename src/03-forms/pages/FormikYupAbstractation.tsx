import * as Yup from "yup";
import { Formik, Form } from "formik";

import { MySelect, MyCheckBox, MyTextInput } from "../components";
import "../styles/styles.css";

const FormikYupAbstractation = () => {
    const initialValues = {
        firtsName : "",
        lastName : "",
        email : "",
        terms : false,
        jobType : "",
    };

    const validationSchema = Yup.object({
        firtsName : Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Es Requerido"),
        lastName : Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Es Requerido"),
        email : Yup.string()
            .email("Debe de tener un formato correcto")
            .required("Es Requerido"),
        terms : Yup.boolean()
            .oneOf([true], "Debe de aceptar las condiciones"),
        jobType : Yup.string()
            .notOneOf(["it-jr"], "Está opción no es requerida")
            .required("Es Requerido"),

    });

    return (
        <div>
            <h1>FormikYupAbstractation</h1>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {
                    () => 
                        <Form>
                            <MyTextInput label="First Name" name="firtsName" placeholder="Nestor"/>                                
                            <MyTextInput label="Last Name" name="lastName" placeholder="Navarro"/>                                
                            <MyTextInput label="email" name="email" placeholder="algo@company.com"/>                                
                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>
                            <MyCheckBox name="terms" label="Terms and conditions" />

                            <button type="submit">Submit</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikYupAbstractation