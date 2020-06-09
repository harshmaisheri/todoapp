import React from "react";
import { reduxForm, Field } from "redux-form";
import Button from "./common/Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/actions";

const TodoForm = ({ handleSubmit, value }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const task = useSelector((store) => store.todo?.task);

  const onHandleSubmit = (val) => {
    if (task.length > 0) {
      dispatch(addTodo([...task, { task: val.todo, status: false }]));
    } else {
      dispatch(addTodo([{ task: val.todo, status: false }]));
    }
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit((val) => onHandleSubmit(val))}>
      <div
        style={{
          justifyContent: "left",
          width: "100%",
          padding: "20px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottom: "2px solid #eee",
        }}
      >
        <label
          htmlFor="task-name"
          style={{
            display: "flex",
            marginBottom: "10px",
            fontSize: "1.25rem",
            color: "#566573",
          }}
        >
          Task Name:
        </label>
        <Field
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "start",
            width: "600px",
            border: "0.5px solid #BFC9CA",
          }}
          name="todo"
          type="text"
          component="input"
          id="todo-task"
          placeholder={value || "Add New Todo Task to you list"}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "right",
          width: "500px",
          margin: "20px",
        }}
      >
        <Button
          type="button"
          text="Cancel"
          color="#eee"
          onClick={() => history.goBack()}
        />
        <Button type="submit" text="Create" color="#3498DB" />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "TodoForm",
})(TodoForm);
