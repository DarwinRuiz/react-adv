
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelectBox } from '../components/MySelectBox';


const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const field of formJson) {
    initialValues[field.name] = field.value || '';

    if (!field.validations) continue;


    let schema = Yup.string();

    for (const validation of field.validations) {
        if (validation.type === 'required') {
            schema = schema.required('This field is required')
        }

        if (validation.type === 'minLength') {
            schema = schema.min((validation as any).value || 1, `This field must be at least ${(validation as any).value || 1} characters`)
        }

        if (validation.type === 'maxLength') {
            schema = schema.max((validation as any).value || 1, `This field must be less than ${(validation as any).value || 1} characters`)
        }

        if (validation.type === 'email') {
            schema = schema.email('Invalid email format')
        }
    }

    requiredFields[field.name] = schema;
}


const validationSchema = Yup.object({ ...requiredFields });

export const DinamicForm = (): JSX.Element => {
    return (
        <div>
            <h1>Dinamic Form</h1>

            <Formik initialValues={initialValues}
                onSubmit={(values) => { console.log(values) }}
                validationSchema={validationSchema}
            >
                {
                    (formik) => (
                        <Form noValidate>

                            {
                                formJson.map((field) => {

                                    if (field.type === 'input' || field.type === 'password' || field.type === 'email' || field.type === 'text') {

                                        return <MyTextInput
                                            key={field.name}
                                            label={field.label}
                                            name={field.name}
                                            type={field.type as any}
                                            placeholder={field.placeholder}
                                            autoComplete={field.autoComplete} />

                                    } else if (field.type === 'select') {
                                        return (
                                            <MySelectBox key={field.name} name={field.name} label={field.label}>
                                                <option value="">Select an option</option>
                                                {
                                                    field.options?.map((option: { [key: string]: any }) => {
                                                        return <option key={option.id} value={option.id}>{option.label}</option>
                                                    })
                                                }

                                            </MySelectBox>
                                        )
                                    }
                                })

                            }

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
