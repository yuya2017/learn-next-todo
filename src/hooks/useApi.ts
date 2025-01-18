import { useState, useEffect } from 'react';

export const useAPI = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then(setData);
  }, [endpoint]);

  return data;
};
