import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleResearch = () => {
  const { projectId } = useParams();
  const [research, setResearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(`/research.json`);
        const data = await response.json();
        console.log(data);

        const selectedResearch = data.find(
          (item) => item.id === parseInt(projectId, 10)
        );

        if (selectedResearch) {
          setResearch(selectedResearch);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  return (
    <div className="mt-20 mx-auto max-w-2xl">
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data.</p>}
      {research && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={research.image}
            alt={research.title}
            className="w-full h-40 object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">{research.title}</h2>
            <p className="text-gray-700">{research.description}</p>
          </div>
          {/* Add more details or images here if needed */}
        </div>
      )}
    </div>
  );
};

export default SingleResearch;
