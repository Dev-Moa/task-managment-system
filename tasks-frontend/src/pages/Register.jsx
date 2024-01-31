import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  // handle submit
  const onSubmit = async (data) => {
    
    const { username, email, password } = data;
    const payload = {
      username:username,
      email: email,
      password: password
    }
    
    try {
      const response = await axios.post('http://localhost:5000/auth/register', payload);
      console.log(response.status);
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
    
   
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="username"
                placeholder="username"
                className="input input-bordered"
                required
                {...register("username")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password")}
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <Link to={'/login'}>login existing user</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
