

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';
import '../styles/styles.css';

export const RegisterFormikPage = (): JSX.Element => {

    const onSubmit = (values: any) => {
        console.log({ values });
    }

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                }}
                onSubmit={onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required').max(15, 'This field must be less than 15 characters').min(3, 'This field must be at least 3 characters'),
                    email: Yup.string().email('Invalid email format').required('This field is required'),
                    password: Yup.string().min(6, 'This field must be at least 6 characters').required('This field is required'),
                    repeatPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('This field is required')
                })} >
                {
                    ({ handleReset }) => (
                        <Form>

                            <MyTextInput label="Name" name="name" type="text" autoComplete="off" />
                            <MyTextInput label="Email" name="email" type="email" autoComplete="off" />
                            <MyTextInput label="Password" name="password" type="password" />
                            <MyTextInput label="Repeat Password" name="repeatPassword" type="password" />

                            <button type="submit">Create</button>
                            <button onClick={handleReset}>Reset Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
