import { useField, ErrorMessage } from "formik";

interface Props {
    label : string;
    name : string;
    type ?: "text" | "email" | "password";
    placeholder ?: string;
    [key : string] : any;
}

const MyTextInput = ({ label, ...props } : Props) => {
    const [ field ] = useField(props);
    return (
        <>
            <label htmlFor={props?.id ? props.id : props.name}>{label}</label>
            <input {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    );
}

export default MyTextInput;