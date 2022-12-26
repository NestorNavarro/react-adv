import { useFormik } from "formik";
import { FormikErrors } from "formik/dist/types";

import "../styles/styles.css";

interface FormValues {
    firtsName: string;
    lastName: string;
    email: string;
}

const FormikBasicPage = () => {

    const validate = (formValues : FormValues) => {
        const errors : FormikErrors<FormValues> = {};

        if (!formValues.firtsName) {
            errors.firtsName = "Required";
        } else if (formValues.firtsName.length >= 15) {
            errors.firtsName = "Must be 15 characteres or less";
        }

        if (!formValues.lastName) {
            errors.lastName = "Required";
        } else if (formValues.lastName.length >= 10) {
            errors.lastName = "Must be 10 characteres or less";
        }

        if (!formValues.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
            errors.email = 'Invalid email address';
          }

        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik<FormValues>({
        initialValues : {
            firtsName : "",
            lastName : "",
            email : "",
        },
        onSubmit : values => console.log(values),
        validate,
    });

    return (
        <div>
            <h1>FormikBasicPage</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firtsName">First Name</label>
                <input
                    type="text"
                    name="firtsName"
                    value={values.firtsName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
               { touched.firtsName && errors.firtsName && <span>{ errors.firtsName  }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
               { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikBasicPage