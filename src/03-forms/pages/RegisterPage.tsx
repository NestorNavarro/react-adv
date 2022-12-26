import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

interface RegisterInpts {
    name : string;
    email: string;
    password1 : string;
    password2 : string;
}

const RegisterPage = () => {
    const { 
        formData, 
        reset, 
        onChange, 
        onSubmit,
        isValidEmail,
    } = useForm<RegisterInpts>({
        initState : {
            name : "",
            email : "",
            password1 : "",
            password2 : "",
        }
    });

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={onSubmit} noValidate>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={onChange}
                    className={`${formData.name.trim().length <=0 && "has-error"}`}
                />
                { formData.name.trim().length <=0 && <span>The name is required</span> }
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={onChange}
                    className={`${!isValidEmail(formData.email) && "has-error"}`}
                />
                { !isValidEmail(formData.email) && <span>Invalid Email</span>}
                <input
                    type="password"
                    name="password1"
                    placeholder="Password"
                    value={formData.password1}
                    onChange={onChange}
                />
                { formData.password1.trim().length <=0 && <span>The password is required</span> }
                { formData.password1.trim().length < 6 && <span>Must be have 6 characters</span> }
                <input
                    type="password"
                    name="password2"
                    placeholder="Repeat Password"
                    value={formData.password2}
                    onChange={onChange}
                />
                { formData.password2.trim().length <=0 && <span>The password is required</span> }
                { (formData.password2.trim().length > 0 && formData.password1 !== formData.password2) 
                    && <span>The passwords must be equals</span> }

                <button type="submit">Create</button>
                <button type="button" onClick={reset}>Reset Form</button>
            </form>
        </div>
    )
}

export default RegisterPage