import axios from "axios";
// import {Navigate} from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/pages/auth/signup.css"
export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate();

  const submit = async e => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password
    };
    setIsPending(true)
    const { data } = await axios.post('/user/create/', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    }, { withCredentials: true });

    setIsPending(false)
    // console.log(data)
    // localStorage.clear();
    // localStorage.setItem('access_token', data.access);
    // localStorage.setItem('refresh_token', data.refresh);
    // axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
    navigate('/login');

  }

  return (
    <div className="text-center">
      <main className="form-signin w-100 m-auto">
        <form >
          <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="Enter Email"
              name='email'
              value={email}
              required
              onChange={e => setEmail(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input className="form-control" id="floatingInput" placeholder="Enter Username"
              name='username'
              type='text'
              value={username}
              required
              onChange={e => setUsername(e.target.value)} />
            <label htmlFor="floatingInput">Username</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" name='password'
              placeholder="Enter password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          {isPending ? <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
          </button> :
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          }
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </form>
      </main>
    </div>
  )
}

{/* <div className="m-auto py-5">
<form className="Auth-form" onSubmit={submit}>
  <div className="Auth-form-content">
    <h3 className="Auth-form-title">Sign Up</h3>
    <div className="form-group mt-3">
      <label>Username</label>
      <input
        className="form-control mt-1"
        placeholder="Enter Username"
        name='username'
        type='text'
        value={username}
        required
        onChange={e => setUsername(e.target.value)}
      />
    </div>
    <div className="form-group mt-3">
      <label>Email</label>
      <input
        className="form-control mt-1"
        placeholder="Enter Email"
        name='email'
        type='email'
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group mt-3">
      <label>Password</label>
      <input
        name='password'
        type="password"
        className="form-control mt-1"
        placeholder="Enter password"
        value={password}
        required
        onChange={e => setPassword(e.target.value)}
      />
    </div>
    <div className="d-grid gap-2 mt-3">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
    <div className="d-grid gap-2 mt-3">
      you already have an account <Link to="/login">Login</Link>

    </div>
  </div>
</form>
</div> */}