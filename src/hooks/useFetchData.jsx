import { useState, useEffect } from "react";

const useFetchData = (endpoint = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://glacial-escarpment-87572.herokuapp.com/" + endpoint
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log("Holiwi Error -> ");
    }
  }, []);

  return { data, loading, error };
};

export default useFetchData;
