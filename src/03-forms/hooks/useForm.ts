import { ChangeEvent, FormEvent, useState } from "react";

interface UseForm<T> {
    initState : T;
}

export const useForm = <T>({ initState } : UseForm<T>) => {
    const [formData, setFormData] = useState(initState);

    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name] : event.target.value,
        }));
    }

    const onSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const reset = () => setFormData(initState);

    return { 
        formData,
        reset,
        onChange,
        onSubmit,
        isValidEmail,
    };
}