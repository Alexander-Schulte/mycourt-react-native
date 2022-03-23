import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    await apiFunc().then((response) => {
      setLoading(false);

      if (!response.ok) return setError(true);

      setError(false);
      setData(response.data);
    });
  };
  return { data, error, loading, request };
};
