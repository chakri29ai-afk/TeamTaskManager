import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "#000",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Task Management</h1>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ← Dashboard
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>✅ Completed Tasks</h2>

        {completedTasks.length === 0 ? (
          <p>No completed tasks</p>
        ) : (
          completedTasks.map((task) => (
            <div
              key={task._id}
              style={{
                padding: "8px 0",
              }}
            >
              ✓ {task.title}
            </div>
          ))
        )}
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>🕒 Pending Tasks</h2>

        {pendingTasks.length === 0 ? (
          <p>No pending tasks</p>
        ) : (
          pendingTasks.map((task) => (
            <div
              key={task._id}
              style={{
                padding: "8px 0",
              }}
            >
              • {task.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tasks;