import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { useForm } from "react-hook-form";

function ListTask() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const authHeader = useAuthHeader();
  // controlling the modal
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks/", {
        headers: { Authorization: authHeader },
      });
      setTasks(response.data.tasks);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to load tasks");
    }
  };


  // handle update button click
  const handleEditClick = (task) => {
    setShowModal(true); // Update the state to show the modal
    document.getElementById("my_modal_1").showModal(); // Open the modal directly
    setEditingTask(task);
  };

  // handle update submission
  const handleUpdateSubmit = async (data) => {
    console.log(data);
    try {
      await axios.put(`http://localhost:5000/tasks/${editingTask._id}`, data, {
        headers: { Authorization: authHeader },
      });
      // Refetch or update state to reflect the update
      fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
      // Handle update error here
    } // Assuming updateTask is defined
    setShowModal(false);
    setEditingTask(null);
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`, {
        headers: { Authorization: authHeader },
      });
      // Refetch or update state to reflect the deletion
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
      // Handle deletion error here
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>List of Tasks</h1>
      {tasks.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Start</th>
                <th>End</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.description}</td>
                  <td>{task.start}</td>
                  <td>{task.end}</td>
                  <td className="space-x-4">
                    <button
                      className="btn btn-info"
                      onClick={() => handleEditClick(task)}
                    >
                      update
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => deleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No tasks found.</div>
      )}

      {showModal && (
        <div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="modal-action">
                <form
                  method="dialog space-y-4"
                  onSubmit={handleSubmit(handleUpdateSubmit)}
                >
                  <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-full max-w-xs"
                    {...register("description")}
                  />
                  <input
                    type="text"
                    placeholder="start"
                    className="input input-bordered w-full max-w-xs"
                    {...register("start")}
                  />
                  <input
                    type="text"
                    placeholder="end"
                    className="input input-bordered w-full max-w-xs"
                    {...register("end")}
                  />

                  <button className="btn btn-primary block my-4 float-end">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default ListTask;
