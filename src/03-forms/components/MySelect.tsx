import { useField, ErrorMessage } from "formik";

interface Props {
    label : string;
    name : string;
    placeholder ?: string;
    [key : string] : any;
}

const MySelect = ({ label, ...props } : Props) => {
    const [ field ] = useField(props);
    return (
        <>
            <label htmlFor={props?.id ? props.id : props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
        </>
    );
}

export default MySelect;