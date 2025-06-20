import axios from "axios";

export default function ItemModal({ item, onClose }) {
  const handleEnquire = () => {
    axios.post("http://localhost:5000/api/items/enquire", { name: item.name });
    alert("Enquiry sent!");
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div style={{ background: "#fff", padding: "2rem", width: "500px", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", right: 10, top: 10 }}>X</button>
        <h2>{item.name}</h2>
        <p><b>Type:</b> {item.type}</p>
        <p>{item.description}</p>
        <div style={{ display: "flex", gap: "10px", overflowX: "scroll" }}>
          {[item.coverImage, ...item.additionalImages].map((img, i) => (
            <img key={i} src={img} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
          ))}
        </div>
        <button onClick={handleEnquire} style={{ marginTop: "1rem" }}>Enquire</button>
      </div>
    </div>
  );
}
