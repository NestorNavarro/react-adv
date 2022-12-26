import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../styles/styles.css";

const FormikYupComponents = () => {

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
            <h1>FormikYupComponents</h1>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {
                    () => 
                        <Form>
                            <label htmlFor="firtsName">First Name</label>
                            <Field name="firtsName" type="text" />
                            <ErrorMessage name="firtsName" component="span"/>
                                

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span"/>
                            

                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="span"/>


                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>

                            <button type="submit">Submit</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikYupComponents