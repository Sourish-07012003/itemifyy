import { useState } from "react";
import axios from "axios";

export default function AddItem() {
  const [formData, setFormData] = useState({
    name: "", type: "", description: "", coverImage: "", additionalImages: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = { ...formData, additionalImages: formData.additionalImages.split(",") };
    await axios.post("http://localhost:5000/api/items", data);
    setSuccess(true);
    setFormData({ name: "", type: "", description: "", coverImage: "", additionalImages: "" });
  };

  return (
    <div className="container">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Item Name" value={formData.name} onChange={handleChange} required />
        <input name="type" placeholder="Item Type" value={formData.type} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="coverImage" placeholder="Cover Image URL" value={formData.coverImage} onChange={handleChange} required />
        <input name="additionalImages" placeholder="Additional Images (comma-separated URLs)" value={formData.additionalImages} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
      {success && <p>Item successfully added!</p>}
    </div>
  );
}
