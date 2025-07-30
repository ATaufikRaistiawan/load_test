import { useEffect, useState } from "react";

export function usePollingData<T>(url: string, interval: number = 2000) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (error) {
        console.error("Polling error:", error);
      }
    };

    fetchData(); // initial
    const timer = setInterval(fetchData, interval);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [url, interval]);

  return data;
}
