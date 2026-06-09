import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Dashboard() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/tasks/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "#0f172a",
        color: "white",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <h1>🚀 Team Task Manager</h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/projects")}
            style={{
              background: "#10b981",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Projects
          </button>

          <button
            onClick={() => navigate("/tasks")}
            style={{
              background: "#f59e0b",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Tasks
          </button>

          <button
            onClick={logout}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#374151" }}>Total Tasks</h3>

          <h2
            style={{
              color: "black",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {data.totalTasks || 0}
          </h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#374151" }}>
            Completed Tasks
          </h3>

          <h2
            style={{
              color: "black",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {data.completedTasks || 0}
          </h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#374151" }}>
            Pending Tasks
          </h3>

          <h2
            style={{
              color: "black",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {data.pendingTasks || 0}
          </h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#374151" }}>
            In Progress
          </h3>

          <h2
            style={{
              color: "black",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {data.inProgressTasks || 0}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;