import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'

import logo from './../assets/react.svg'
import { ShoppingPage } from '../component-patterns/pages/ShoppingPage'

export const Navigation = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='Vite Logo' />
                    <ul>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='about' element={<h1>About</h1>} />
                    <Route path='users' element={<h1>Users</h1>} />
                    <Route path='/' element={<ShoppingPage />} />
                    <Route path='/*' element={<Navigate to='/home' replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
