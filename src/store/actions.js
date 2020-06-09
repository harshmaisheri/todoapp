import { TODO } from "./types";

export const addTodo = (data) => ({
  type: TODO,
  payload: data,
});
