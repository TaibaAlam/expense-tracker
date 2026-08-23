import React from 'react'
import logo from '../../../src/assets/logoText.png'
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const router = useNavigate();
    return (
        <div className='px-10 p-2 border border-black/30 shadow shadow-black/30 w-7/12 mx-auto mt-6 rounded-full flex justify-between gap-5'>
           <div className='w-1/4'>
                <img src={logo} alt='Logo' className='w-32 h-8'/>
           </div>
           <div className='w-3/4 flex justify-evenly items-center'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-brand-300 font-bold"
                            : "text-black"
                    }
                >
                    My Dashboard
                </NavLink>

                <NavLink
                    to="/expense-list"
                    className={({ isActive }) =>
                        isActive
                            ? "text-brand-300 font-bold"
                            : "text-black"
                    }
                >
                    Expense List
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar