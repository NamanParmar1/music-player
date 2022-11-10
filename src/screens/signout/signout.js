import React from 'react'
import Login from '../auth/login';

export default function Signout() {
    window.localStorage.removeItem("token");
  return (
    <><Login /><div></div></>
  );
}
