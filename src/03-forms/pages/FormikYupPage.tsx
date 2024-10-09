import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = (): JSX.Element => {

    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'This field must be less than 15 characters').required('This field is required'),
            lastName: Yup.string().max(20, 'This field must be less than 20 characters').required('This field is required'),
            email: Yup.string().email('Invalid email format').required('This field is required')
        })
    })

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" {...formik.getFieldProps('firstName')} />
                {(formik.touched.firstName && formik.errors.firstName) && <span>{formik.errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" {...formik.getFieldProps('lastName')} />
                {(formik.touched.lastName && formik.errors.lastName) && <span>{formik.errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" {...formik.getFieldProps('email')} />
                {(formik.touched.email && formik.errors.email) && <span>{formik.errors.email}</span>}

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
