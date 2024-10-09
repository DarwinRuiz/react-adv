import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikComponents = (): JSX.Element => {

    return (
        <div>
            <h1>Formik Components Tutorial</h1>

            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',
            }} onSubmit={(values) => { console.log }} validationSchema={
                Yup.object({
                    firstName: Yup.string().max(15, 'This field must be less than 15 characters').required('This field is required'),
                    lastName: Yup.string().max(20, 'This field must be less than 20 characters').required('This field is required'),
                    email: Yup.string().email('Invalid email format').required('This field is required'),
                    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string().oneOf(['designer', 'developer', 'product', 'other'], 'Invalid job type').required('This field is required')
                })
            } >

                {
                    formik => (
                        <Form noValidate onSubmit={formik.handleSubmit}>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage component="span" name="firstName" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage component="span" name="lastName" />

                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="email" />
                            <ErrorMessage component="span" name="email" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage component="span" name="jobType" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and Conditions
                            </label>
                            <ErrorMessage component="span" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>



        </div>
    )
}
