import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    type: "",
    location: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name,e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/jobs`,
        form
      );
      console.log(response);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add Job</h2>
      <input
        name="title"
        placeholder="Job Title"
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <select name="type" onChange={handleChange} required className="w-full p-2 border rounded">
        <option value=""> Select</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
      </select>
      {/* <input name="type" placeholder="Full-time / Part-time" onChange={handleChange} required className="w-full p-2 border rounded" /> */}
      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Job Description"
        onChange={handleChange}
        required
        className="w-full p-2 border rounded h-32"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Job
      </button>
    </form>
  );
};

export default AddJob;
