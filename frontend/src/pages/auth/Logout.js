import {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export const Logout = () => {
    const {dispatch} = useAuthContext()
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                console.log("localStorage.getItem('refresh_token') ====>",localStorage.getItem('refresh_token'));
                const {data} = await axios.post('/logout/',{
                    refresh_token:localStorage.getItem('refresh_token')
                } ,{headers: {
                    'Content-Type': 'application/json'
                }}, {withCredentials: true});

                console.log('logout', data)
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                // window.location.href = '/login'
                dispatch({type: 'LOGOUT', payload: {}})

                navigate("/login");

            } catch (e) {
                console.log('logout not working')
            }
        })();
    }, []);


        

        // console.log(data)
        // localStorage.clear();
        // localStorage.setItem('token', data.access);
        // localStorage.setItem('refresh_token', data.refresh);
        // axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        // window.location.href = '/'


    return (
        <div></div>
    )
}