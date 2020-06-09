import React from "react";

function TodoList({ list, onhandleEdit, onHandleDone }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <table>
          <thead>
            <tr
              style={{
                width: "700px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <th colSpan="2">#</th>
              <th
                colSpan="4"
                style={{
                  width: "300px",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Task Name
              </th>
              <th
                colSpan="2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100px",
                }}
              >
                Status
              </th>
              <th
                colSpan="2"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  width: "100px",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((data, index) => (
              <tr
                key={data.task}
                style={{
                  width: "700px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                }}
              >
                <td>{index + 1}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    width: "300px",
                  }}
                >
                  {data.task}
                </td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    width: "100px",
                  }}
                >
                  {data.status ? (
                    <span
                      style={{
                        background: "#17A589",
                        borderRadius: "10px",
                        padding: "5px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    >
                      Done
                    </span>
                  ) : (
                    <span
                      style={{
                        background: "#8E44AD",
                        borderRadius: "10px",
                        padding: "5px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    >
                      Undone
                    </span>
                  )}
                </td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    style={{
                      padding: "2px 5px",
                      marginRight: "5px",
                    }}
                    disabled={data.status}
                    onClick={() => onhandleEdit(data)}
                  >
                    Edit
                  </button>
                  {!data.status && (
                    <button
                      style={{
                        padding: "2px 5px",
                      }}
                      onClick={() => onHandleDone(data)}
                    >
                      Done
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
