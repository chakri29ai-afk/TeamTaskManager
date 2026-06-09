import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "#f5f7fb",
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
          marginBottom: "20px",
          fontSize: "16px",
        }}
      >
        ← Dashboard
      </button>

      <h1 style={{ color: "#111827" }}>
        📁 Project Management
      </h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          marginTop: "20px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "black" }}>
          Team Task Manager
        </h2>

        <p
          style={{
            color: "black",
            lineHeight: "1.8",
            fontSize: "16px",
          }}
        >
          The Team Task Manager project is designed to
          help teams organize, assign, track, and
          monitor tasks efficiently. It provides secure
          user authentication, project management,
          task assignment, status tracking, and
          dashboard analytics. The system improves
          collaboration among team members and helps
          administrators monitor project progress in
          real time.
        </p>

        <div
          style={{
            marginTop: "20px",
            color: "black",
          }}
        >
          <strong>Technologies Used:</strong>

          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>JWT Authentication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;