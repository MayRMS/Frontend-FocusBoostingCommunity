import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/User/userSlice";

export const Header = () => {

    const dispatch = useDispatch();
    const initial = {
        token: '',
        user: {}
    }

    const navigate = useNavigate();

    const datosReduxUsuario = useSelector(userData);

    const logOff = () => {
        dispatch(logout({ userPass: initial }))
        navigate("/")
    }


    return (
        <div className='headerDesign'>
            <div className='headerLinksDesign'>
                {datosReduxUsuario.userPass.rol === "admin" &&
                    <div onClick={() => navigate("/admin")} className='linkDesign'>admin</div>
                }
                {datosReduxUsuario.userPass.token !== "" ?
                    (<>
                        <div onClick={() => navigate("/profile")} className='linkDesign' >{datosReduxUsuario.userPass?.name}</div>
                        <div className='linkDesign' onClick={() => logOff()}>logout</div>
                    </>)
                    : (
                        <>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/login") }, 200)}>login</div>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>register</div>
                        </>
                    )
                }
            </div>
        </div>
    );
};