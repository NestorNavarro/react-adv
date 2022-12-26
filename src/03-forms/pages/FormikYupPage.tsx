import * as Yup from "yup";
import { useFormik } from "formik";

import "../styles/styles.css";

interface FormValues {
    firtsName: string;
    lastName: string;
    email: string;
}

const FormikYupPage = () => {
    const { 
        errors, 
        touched,
        handleSubmit,
        getFieldProps,
    } = useFormik<FormValues>({
        initialValues : {
            firtsName : "",
            lastName : "",
            email : "",
        },
        validationSchema : Yup.object({
            firtsName : Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Es Requerido"),
            lastName : Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Es Requerido"),
            email : Yup.string()
            .email("Debe de tener un formato correcto")
                            .required("Es Requerido"),

        }),
        onSubmit : values => console.log(values),
    });

    return (
        <div>
            <h1>FormikYupPage</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firtsName">First Name</label>
                <input
                    type="text"
                    { ...getFieldProps("firtsName")}
                />
               { touched.firtsName && errors.firtsName && <span>{ errors.firtsName  }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    { ...getFieldProps("lastName")}
                />
               { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    { ...getFieldProps("email")}
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikYupPage