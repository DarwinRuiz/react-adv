
import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = (): JSX.Element => {

    const { name, email, password, repeatPassword, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const onSubmit = (eventSubmit: FormEvent<HTMLFormElement>) => {
        eventSubmit.preventDefault();
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit} >
                <input type="text" className={`${name.trim().length <= 0 && 'has-error'}`} placeholder="name" name="name" value={name} onChange={onChange} />
                {name.trim().length <= 0 && <span>Este campo es requerido</span>}

                <input type="email" className={`${!isValidEmail(email) && 'has-error'}`} placeholder="email" name="email" value={email} onChange={onChange} />
                {!isValidEmail(email) && <span>No es un email válido</span>}


                <input type="password" className={`${(password.trim().length <= 0 && (password.trim().length < 6 && password.trim().length > 0)) && 'has-error'}`} placeholder="password" name="password" value={password} onChange={onChange} />
                {password.trim().length <= 0 && <span>Este campo es requerido</span>}
                {(password.trim().length < 6 && password.trim().length > 0) && <span>Este campo debe contener al menos 6 caracteres</span>}


                <input type="password" className={`${(repeatPassword.trim().length <= 0 && (repeatPassword.trim().length > 0 && (password !== repeatPassword))) && 'has-error'}`} placeholder="repeat password" name="repeatPassword" value={repeatPassword} onChange={onChange} />
                {repeatPassword.trim().length <= 0 && <span>Este campo es requerido</span>}
                {(repeatPassword.trim().length > 0 && (password !== repeatPassword)) && <span>Las contraseñas no son iguales</span>}



                <button type="submit">Create</button>
                <button onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
}
