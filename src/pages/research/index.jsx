import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResearchPage = () => {
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
    <div>
      <h1>This is the research page. It contains all the research</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data.</p>
      ) : (
        <ul>
          {research.map((researchItem) => (
            <li
              key={researchItem.id}
              className="border border-red-4 bg-sky-300"
            >
              <Link to={`/researchDetails/${researchItem.id}`}>
                {researchItem.title}
                {researchItem.description}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResearchPage;
