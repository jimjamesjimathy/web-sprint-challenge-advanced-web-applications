import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const Logout = () => {        
    const { push } = useHistory();
    const token = localStorage.getItem('token')
    useEffect(() => {
        axiosWithAuth().post('/logout', {}, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            localStorage.removeItem('token');
            push('/login')
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(<div></div>);
}

export default Logout;
