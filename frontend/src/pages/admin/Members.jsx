import { useState } from "react";
import axios from "axios";

const Members = () => {
  const [name, setName] = useState("");

  const handleAdd = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/members",
        { name },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      alert("Member Added");
      setName("");
    } catch (err) {
      alert("Error adding member");
    }
  };

  return (
    <div>
      {/* Page Heading */}
      <h2 className="text-xl font-bold mb-4">Members</h2>

      {/* Add Member Form */}
      <div className="bg-white p-4 rounded shadow max-w-md">
        <input
          type="text"
          placeholder="Enter member name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <button
          onClick={handleAdd}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Add Member
        </button>
      </div>
    </div>
  );
};

export default Members;