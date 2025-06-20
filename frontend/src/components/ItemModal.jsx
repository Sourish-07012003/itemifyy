import axios from "axios";

export default function ItemModal({ item, onClose }) {
  const handleEnquire = () => {
    axios
      .post("https://itemify-backend.onrender.com/api/items/enquire", {
        name: item.name,
      })
      .then(() => {
        alert("Enquiry sent!");
      })
      .catch((error) => {
        console.error("Error sending enquiry:", error);
        alert("Failed to send enquiry.");
      });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          width: "500px",
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            border: "none",
            background: "transparent",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
        <h2 style={{ marginBottom: "0.5rem" }}>{item.name}</h2>
        <p>
          <strong>Type:</strong> {item.type}
        </p>
        <p>{item.description}</p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            marginTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          {[item.coverImage, ...item.additionalImages].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`item-${i}`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          ))}
        </div>
        <button
          onClick={handleEnquire}
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Enquire
        </button>
      </div>
    </div>
  );
}
