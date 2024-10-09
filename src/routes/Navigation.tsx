import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import logo from './../assets/react.svg'
import { RegisterPage } from '../03-forms/pages/RegisterPage'
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage'
import { FormikYupPage } from '../03-forms/pages/FormikYupPage'
import { FormikComponents } from '../03-forms/pages/FormikComponents'
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction'
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage'
import { DinamicForm } from '../03-forms/pages/DinamicForm'

export const Navigation = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='Vite Logo' />
                    <ul>
                        <li>
                            <NavLink to='/register' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstraction' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register-formik-page' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dinamic-form' className={({ isActive }) => isActive ? 'nav-active' : ''}>Dinamic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='formik-basic' element={<FormikBasicPage />} />
                    <Route path='formik-yup' element={<FormikYupPage />} />
                    <Route path='formik-components' element={<FormikComponents />} />
                    <Route path='formik-abstraction' element={<FormikAbstraction />} />
                    <Route path='register-formik-page' element={<RegisterFormikPage />} />
                    <Route path='dinamic-form' element={<DinamicForm />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/*' element={<Navigate to='/home' replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
