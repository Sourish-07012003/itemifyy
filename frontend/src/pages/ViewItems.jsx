import { useEffect, useState } from "react";
import axios from "axios";
import ItemModal from "../components/ItemModal";

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://itemify-backend.onrender.com/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.error("Failed to fetch items:", err);
        alert("Could not load items. Please try again later.");
      });
  }, []);

  return (
    <div className="container">
      <h2>All Items</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onClick={() => setSelected(item)}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={item.coverImage}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h4 style={{ marginTop: "0.5rem", textAlign: "center" }}>{item.name}</h4>
          </div>
        ))}
      </div>

      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
