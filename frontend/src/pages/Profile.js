import axios from "axios"
import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
    const {user} = useAuthContext();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
  
    const navigate = useNavigate();
  
    const submit = async e => {
      e.preventDefault();
  
      const userInfo = {
        first_name: firstname,
        last_name: lastname,
      };
  
      console.log("requesting to update ","update_profile/"+user.id);
      const { data } = await axios.put("update_profile/"+user.id+"/", userInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      }, { withCredentials: true });
  
      // console.log(data)
      // localStorage.clear();
      // localStorage.setItem('access_token', data.access);
      // localStorage.setItem('refresh_token', data.refresh);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
      navigate('/login');
  
    }
    
    useEffect(()=>{
        console.log("requesting for info ","update_profile/"+user.id);
        axios.get("update_profile/"+user.id).then(data=>{
            console.log("got user data ", data.data);
            setFirstName(data.data['first_name'])
            setLastName(data.data['last_name'])
        })
    },[])

    return (
        <div className="m-auto py-5">
        <form className="Auth-form" onSubmit={submit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Profile</h3>
            <div className="form-group mt-3">
              <label>FirstName</label>
              <input
                className="form-control mt-1"
                placeholder="Enter Username"
                name='first_name'
                type='text'
                value={firstname}
                required
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>LastName</label>
              <input
                className="form-control mt-1"
                placeholder="Enter Email"
                name='last_name'
                type='text'
                value={lastname}
                required
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            {/* <div className="form-group mt-3">
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
            </div> */}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}