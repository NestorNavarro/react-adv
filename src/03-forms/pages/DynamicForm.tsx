import * as Yup from "yup";
import { Formik, Form } from "formik";

import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json"

const initialValues : { [key : string] : any } = {}
const requierdFields : { [key : string] : any } = {}

for(const inpt of formJson) {
    initialValues[inpt.name] = inpt.value;

    if (!Array.isArray(inpt.validation)) {
        continue;
    }

    let schema = Yup.string();
    
    for (const rule of inpt.validation) {
        if (rule.type === "required") {
            schema = schema.required("Este campo es requierido");
        }
        if (rule.type === "minLength") {
            schema = schema.min((rule as any)?.value || 2, `Mínimo de ${(rule as any)?.value || 2} de caracteres`);
        }
        if (rule.type === "email") {
            schema = schema.email("Debe de tener un formato correcto");
        }
    }
    requierdFields[inpt.name] = schema;
}

const validationSchema = Yup.object({ ...requierdFields });

const DynamicForm = () => {
    return (
        <div>
            <h1>DynamicForm</h1>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values : any ) => console.log(values)}
            >
                {
                    () => (
                        <Form noValidate>
                            {
                                formJson.map(inpt => {
                                    if (inpt.type === "email" || inpt.type === "text" || inpt.type === "password") {
                                        return (
                                            <MyTextInput 
                                                key={inpt.name}
                                                name={inpt.name} 
                                                label={inpt.label}
                                                placeholder={inpt.placeholder}
                                                type={inpt.type as any} 
                                            />
                                        );
                                    }
                                    if (inpt.type === "select" && Array.isArray(inpt.options)) {
                                        return (
                                            <MySelect key={inpt.name} name={inpt.name} label={inpt.label}>
                                                <option value="">Selecciona una opción</option>
                                                {
                                                    inpt.options.map(option => (
                                                        <option key={option.value} value={option.value}>{option.label}</option>
                                                    ))
                                                }
                                            </MySelect>
                                        )
                                    }
                                    return <span>Type {inpt.type} no soportado</span>
                                })
                            }
                            <button type="submit">submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default DynamicForm