import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllResearch = () => {
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = "/research.json";

  async function getData() {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setResearch(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Render your projects in the component
  return (
    <div className="mt-10">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {research.map((researchItem) => (
            <div
              key={researchItem.id}
              className="border rounded-md overflow-hidden shadow-md bg-white"
            >
              <Link to={`/researchDetails/${researchItem.id}`}>
                <img
                  src={researchItem.image}
                  alt={researchItem.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">
                    {researchItem.title}
                  </h2>
                  <p className="text-gray-700">{researchItem.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllResearch;
