import { Formik, Form } from "formik";
import { MyTextInput } from "../components";
import formJson from "../data/custom-form.json"

const initialValues : { [key : string] : any } = {}

for(const inpt of formJson) {
    initialValues[inpt.name] = inpt.value;
}

const DynamicForm = () => {
    return (
        <div>
            <h1>DynamicForm</h1>
            <Formik 
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
            >
                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map(inpt => {
                                    return (
                                        <MyTextInput 
                                            key={inpt.name}
                                            name={inpt.name} 
                                            label={inpt.lable}
                                            placeholder={inpt.placeholder}
                                            type={inpt.type as any} 
                                        />
                                    );
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