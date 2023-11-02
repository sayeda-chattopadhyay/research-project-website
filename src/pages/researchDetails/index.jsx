import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ResearchDetails = () => {
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
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data.</p>}
      {research && (
        <div>
          <h2>{research.title}</h2>
          <p>{research.description}</p>
        </div>
      )}
    </div>
  );
};

export default ResearchDetails;
