import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";

function Homepage() {
  const history = useHistory();
  const [list, setList] = useState(useSelector((store) => store.todo?.task));

  const onHandleClick = () => {
    history.push("/add-todo");
  };

  const onEdit = (e) => {
    history.push("/add-todo", {
      edit: e,
    });
  };

  const onDone = (e) => {
    const changeStatus = list.map((data) => {
      if (data.task === e.task) {
        return {
          task: data.task,
          status: !data.status,
        };
      } else {
        return data;
      }
    });

    setList(changeStatus);
  };

  return (
    <div style={{ width: "700px" }}>
      <div
        style={{
          background: "white",
          justifyContent: "left",
          width: "100%",
          padding: "20px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          display: "flex",
          borderBottom: "2px solid #eee",
        }}
      >
        <button
          style={{
            justifyContent: "flex-start",
            padding: "10px",
            background: "#3498DB",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bolder",
            borderRadius: "5px",
            border: "none",
          }}
          onClick={onHandleClick}
        >
          Add Task
        </button>
      </div>
      <div
        style={{
          background: "white",
          justifyContent: "center",
          width: "100%",
          padding: "20px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          display: "flex",
        }}
      >
        {list?.length > 0 ? (
          <TodoList list={list} onhandleEdit={onEdit} onHandleDone={onDone} />
        ) : (
          <div>
            <p style={{ fontStyle: "italic" }}>No Task Added</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
