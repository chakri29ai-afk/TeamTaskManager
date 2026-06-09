import { useEffect, useState } from "react";
import API from "../api";

function Tasks() {
  const [tasks, setTasks] = useState([]);

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
      <h1>Task Management</h1>

      <div style={{ marginTop: "30px" }}>
        <h2>Completed Tasks</h2>

        {completedTasks.length === 0 ? (
          <p>No completed tasks</p>
        ) : (
          completedTasks.map((task) => (
            <div key={task._id}>
              ✓ {task.title}
            </div>
          ))
        )}
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Pending Tasks</h2>

        {pendingTasks.length === 0 ? (
          <p>No pending tasks</p>
        ) : (
          pendingTasks.map((task) => (
            <div key={task._id}>
              • {task.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tasks;