import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  async function getAllJobs() {
    const query = search ? `?search=${search}` : "";
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/jobs${query}`
    );
    setJobs(response.data);
  }
  console.log(jobs);
  useEffect(() => {
    getAllJobs();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    getAllJobs();
  };

  if (!jobs) return <p>Loading...</p>;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <form onSubmit={handleSearch} className="sm:flex gap-4 mb-4 items-center">
        <p>Filter</p>
        <div className="relative flex items-center w-full">
          <input
            type="text"
            value={search}
            placeholder="filter by job title or location"
            className="w-full p-2 border rounded"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="absolute right-2 cursor-pointer" type="submit">
            <IoSearch className="text-2xl " />
          </button>
        </div>
      </form>
      <div>
        <div className="  flex flex-col justify-center gap-4">
          {jobs.length > 0 ? (
            jobs?.map((job) => (
              <div
                key={job._id}
                className="border rounded-lg p-4 shadow hover:shadow-md flex justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-700">
                    {job.company} - {job.location}
                  </p>
                  <p className="text-sm text-gray-500">Type: {job.type}</p>
                  <Link
                    to={`/job/${job._id}`}
                    className="text-blue-500 hover:underline mt-2 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="flex justify-center bg-red-300 py-2 font-bold text-white">
              No jobs found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
