import React from 'react';
import './style.css';

let Dashboard = () => {
  let username = localStorage.getItem('username');

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1>Login Success</h1>
      <h3>Welcome to the Dashboard, {username}!</h3>
      <a href="@{/account/password/change}" class="mt-3"><h5>Change Password</h5></a>
      <a href="@{/account/role}" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Role Management</a>
    </div>
  );
};

export default Dashboard;
