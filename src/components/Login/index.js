import "./style.css"
import { useState } from 'react';

let Login = () => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [message, setMessage] = useState(null);

  let submitLogin = async (e) => {
    e.preventDefault();

    let userLogin = {
      username : username,
      password : password
    }

    try{
      let response = await fetch('http://localhost:8080/api/account/login', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(userLogin)
      });

      let data = await response.json();

      if(response.ok){
        if (data.message === "Not Verified Yet!"){
          setMessage("Your account is not verified yet!")
        } else if (data.message === "Login Success!"){
          setMessage("login success")
          setUsername('');
          setPassword('');
          localStorage.setItem('username', username);
          window.location.href = "/dashboard";
        } else {
          setMessage("Credentials Doesn't Match Any Records!")
        }
      }
    } catch (error) {
      setMessage(error.message)
    }
  
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card transparent-card glass w-50">
        <div className="card-header"> {message && (
            <div className="alert alert-success mb-4">
              <p>{message}</p>
            </div>
          )}
          <h1>Login</h1>
        </div>
        <div className="card-body">
          <form onSubmit={submitLogin}>
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input type="text" id="username" name="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input type="password" id="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark"> Login </button>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="mt-3">
            <a href="/account/find-email" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> Forgot password? </a>
          </div>
          <div className="mt-2">
            <a href="/account/register" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> Register </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;