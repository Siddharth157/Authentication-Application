import axios from "axios";
import ACTIONS from "./index";

const API_URL = "http://localhost:5000";

export const addNewTodo = async (data,dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ACTIONS.ADD_NEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error obtained while calling Add new Task API", error.message);
  }
};
