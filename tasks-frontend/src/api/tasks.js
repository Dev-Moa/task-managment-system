import { axiosInstance } from "./axiosInstance";

export const getTasks = async () => {
    try {
        const response = await axiosInstance.get(`tasks/`);
        return response.data;
    } catch (error) {
        console.error("Error in getTasks:", error);
        return { error: error.response ? error.response.data : "Network Error" };
    }
};

export const getTask = async (id) => {
    try {
        const response = await axiosInstance.get(`tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error in getTask:", error);
        return { error: error.response ? error.response.data : "Network Error" };
    }
};


export const createTask = async (data) => {
    try {
        const response = await axiosInstance.post(`tasks/`, data);
        return response.data;
    } catch (error) {
        console.error("Error in createTask:", error);
        return { error: error.response ? error.response.data : "Network Error" };
    }
};

export const updateTask = async (id, data) => {
    try {
        const response = await axiosInstance.put(`tasks/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error in updateTask:", error);
        return { error: error.response ? error.response.data : "Network Error" };
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await axiosInstance.delete(`tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error in deleteTask:", error);
        return { error: error.response ? error.response.data : "Network Error" };
    }
};
