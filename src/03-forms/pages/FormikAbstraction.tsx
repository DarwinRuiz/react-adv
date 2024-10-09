import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';
import { MySelectBox } from '../components/MySelectBox';
import { MyCheckBox } from '../components/MyCheckBox';


export const FormikAbstraction = (): JSX.Element => {

    return (
        <div>
            <h1>Formik Abstraction Tutorial</h1>

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

                            <MyTextInput label="First Name" name="firstName" type="text" />

                            <MyTextInput label="Last Name" name="lastName" type="text" />

                            <MyTextInput label="Email Address" name="email" type="email" />

                            <MySelectBox label="Job Type" name="jobType" as="select">
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </MySelectBox>

                            <MyCheckBox label="Terms and Conditions" name="terms" />


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>



        </div>
    )
}
