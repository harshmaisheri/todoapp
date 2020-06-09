import React from "react";
import TodoForm from "../components/TodoForm";
import { useLocation } from "react-router-dom";

function AddTodo() {
  const location = useLocation();

  return (
    <div style={{ width: "700px" }}>
      <div
        style={{
          background: "white",
          width: "100%",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          borderBottom: "2px solid #eee",
        }}
      >
        <TodoForm value={location?.state?.edit?.task} />
      </div>
    </div>
  );
}

export default AddTodo;
