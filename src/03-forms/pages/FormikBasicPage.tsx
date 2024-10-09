import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = (): JSX.Element => {

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!values.firstName) {
            errors.firstName = 'This field is required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'This field must be less than 15 characters';
        }

        if (!values.lastName) {
            errors.lastName = 'This field is required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'This field must be less than 20 characters';
        }

        if (!values.email) {
            errors.email = 'This field is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email format';
        }

        return errors
    }

    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    })

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {(formik.touched.firstName && formik.errors.firstName) && <span>{formik.errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {(formik.touched.lastName && formik.errors.lastName) && <span>{formik.errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {(formik.touched.email && formik.errors.email) && <span>{formik.errors.email}</span>}

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
