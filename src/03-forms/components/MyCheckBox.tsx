import { useField, ErrorMessage } from "formik";

interface Props {
    label : string;
    name : string;
    placeholder ?: string;
    [key : string] : any;
}

const MyCheckBox = ({ label, ...props } : Props) => {
    const [ field ] = useField({ ...props, type : "checkbox" });

    return (
        <>
            <label >
                <input {...field} {...props} type="checkbox" />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" />

        </>
    );
}

export default MyCheckBox;