import { useState, useEffect } from "react";

const UpdateItem = ({ item }) => {
  // 1. Create a state for the form
  const [updatedValue, setUpdatedValue] = useState("");
  const [message, setMessage] = useState("");

  // Initialize state when item is received
  useEffect(() => {
    if (item && item.name) {
      setUpdatedValue(item.name);
    }
  }, [item]);

  // 2. Create a function to handle the form submission
  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://api.example.com/items/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: updatedValue }),
      });
      if (response.ok) {
        setMessage("Item updated successfully!");
      } else {
        setMessage("Failed to update item");
      }
    } catch {
      setMessage("Failed to update item");
    }
  };

  // 3. Create a function to handle the form input changes
  return (
    <div>
      <h2>Update Item</h2>
      <input value={updatedValue} onChange={(e) => setUpdatedValue(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;