import axios from "axios";
// import {Navigate} from "react-router-dom";
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../../hooks/useAuthContext";


export const Login = () => {
    const {dispatch,user} = useAuthContext()


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submit = async e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
          };

        // const {data} = await axios.post('/token/', user ,{headers: {
        //     'Content-Type': 'application/json'
        // }}, {withCredentials: true});

        const {data} = await axios.post('/token/', user ,{headers: {
          'Content-Type': 'application/json'
      }});

        console.log(data)
      if(!data.error){
        var jwt_username = jwt_decode(data.access).username;
        var jwt_id = jwt_decode(data.access).user_id;

        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;


        dispatch({type: 'LOGIN', payload: {"username":jwt_username,"id":jwt_id}})
        navigate(`/${username}`);
        navigate(`/${username}`);
      }
      else{
        console.log("error");
      }

    }


    return(
      <div className="m-auto py-5">
        <form className="Auth-form" onSubmit={submit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
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
            You don't have an account
            <Link to="/signup"> Signup</Link>
            </div>

          </div>
        </form>
    </div>
    )
}