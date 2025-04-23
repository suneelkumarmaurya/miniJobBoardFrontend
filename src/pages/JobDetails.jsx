import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  async function getJobDetails(id) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/jobs/${id}`
      );
      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJobDetails(id);
  }, [id]);

  if (!job) return <p className="text-gray-500">Loading...</p>;

  return (
    <>
      <Link to="/" className="flex items-center gap-2 mb-2 text-xl font-semibold text-red-200 hover:text-blue-600">
        <IoMdArrowBack />
        All Jobs
      </Link>
      <div className="p-4 border rounded shadow">
        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
        <p>
          <strong>Company:</strong> {job.company}
        </p>
        <p>
          <strong>Type:</strong> {job.type}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p className="mt-2">
          <strong>Description:</strong>
          <br /> {job.description}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Posted on: {new Date(job.createdAt).toLocaleDateString()}
        </p>
      </div>
    </>
  );
};

export default JobDetails;
