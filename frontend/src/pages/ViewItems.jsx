import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://itemify-backend.onrender.com/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Failed to fetch items:", err));
  }, []);

  return (
    <div className="view-container">
      <h2>View Items</h2>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.coverImage} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
