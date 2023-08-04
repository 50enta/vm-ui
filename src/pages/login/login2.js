import './style.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Logo from '../../assets/logoBlack.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Login() {
  const [formData, setFormData] = useState({})
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  return (
    <div className='logContainer' >
      <div className="screen-1">
        <div style={{ height: '100px', display: 'flex', justifyContent: 'center', margin: '-20px 0 30px 0' }} >
          <img src={Logo} style={{ width: '145px' }} />
        </div>
        <div className="email" >
          <label htmlFor="email">
            Email
          </label>
          <div className="sec-2">
            <EmailOutlinedIcon style={{ position: 'absolute' }} />

            <input
              type='password'
              name='password'
              value={formData?.password}
              placeholder='email@email.com'
              onChange={onChange}
            />
          </div>
        </div>

        <div className="password" >
          <label htmlFor="password">
            {'Password'}
          </label>
          <div className="sec-2">

            <LockOutlinedIcon style={{ position: 'absolute' }} />
            <input
              className="pas"
              type="password"
              name={"password"}
              value={formData?.Password}
              placeholder='Your Password'
              onChange={onChange}
            />
          </div>
        </div>

        <button className="login" onClick={() => { navigate("dashboard/home") }} >
          Login
        </button>
        <div className="footer">
          <span>Forgot password?
          </span>
        </div>
      </div>
      <a className="redirect" href='http://localhost:8000/api/weathers/USA' target='_blank' >
          View weather info
        </a>
    </div>
  );
}