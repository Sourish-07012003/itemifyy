import { useEffect, useState } from "react";
import axios from "axios";
import ItemModal from "../components/ItemModal";

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items").then(res => setItems(res.data));
  }, []);

  return (
    <div className="container">
      <h2>All Items</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {items.map((item, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }} onClick={() => setSelected(item)}>
            <img src={item.coverImage} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
