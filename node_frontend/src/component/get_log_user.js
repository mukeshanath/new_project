import React from 'react';
import { useSelector } from 'react-redux';

function GetLogUser() {
    const userDetails = useSelector((state) => state['user']['userDetails']['username']);
    const loginuser = localStorage.getItem('login_username');
    
    return userDetails || loginuser;
}

export default GetLogUser;
