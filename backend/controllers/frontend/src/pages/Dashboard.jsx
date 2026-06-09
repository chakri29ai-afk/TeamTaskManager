import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {

  const [data, setData] = useState({});

  useEffect(() => {

    const fetchDashboard = async () => {

      const token =
        localStorage.getItem("token");

      const res = await API.get(
        "/tasks/dashboard",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      setData(res.data);
    };

    fetchDashboard();

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <h3>
        Total Tasks:
        {data.totalTasks}
      </h3>

      <h3>
        Completed Tasks:
        {data.completedTasks}
      </h3>

      <h3>
        Pending Tasks:
        {data.pendingTasks}
      </h3>

      <h3>
        In Progress Tasks:
        {data.inProgressTasks}
      </h3>
    </div>
  );
}

export default Dashboard;