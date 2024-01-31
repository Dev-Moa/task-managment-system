import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';


function AddTask() {
  const { register, handleSubmit,reset } = useForm();
  const authHeader = useAuthHeader()
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/tasks/', data , { headers: { 'Authorization': authHeader } });
      return response.data
    } catch (error) {
      return error.response
    }
   
  }
  return (
    <div>
      {/* Add Task form */}
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="description"
            placeholder="description"
            className="input input-bordered"
            required
            {...register("description")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Start Date </span>
          </label>
          <input
            type="start date "
            placeholder="start date "
            className="input input-bordered"
            required
            {...register("start")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">End date </span>
          </label>
          <input
            type="end Date "
            placeholder="end Date "
            className="input input-bordered"
            required
            {...register("end")}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">+ Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
