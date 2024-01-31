import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
function Login() {
  const { register, handleSubmit } = useForm();
  const signIn = useSignIn()
  const navigate = useNavigate();
  // handle submit
  const onSubmit = async (data) => {
    console.log(data)
    const { email, password } = data;
    const payload = {
      email: email,
      password: password
    }
    console.log(payload);
    try {
      const response = await axios.post('http://localhost:5000/auth/login', payload)
      signIn({
        auth: {
          token: response.data.accessToken,
          type: 'Bearer'
        },
        userState:payload.email
      })
      navigate('/app')
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
              <button className="btn btn-primary">Login</button>
            </div>
            <Link to={'/register'}>Signup new account</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
