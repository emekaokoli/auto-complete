import { OptionProps, mockData } from "@/___data___/mock";
import { useEffect, useState } from "react";


export function useGetData() {
  const [data, setData] = useState<readonly OptionProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetcher = async () => {
    try {
      setLoading(true);
      // Simulating asynchronous data fetching by using setTimeout (3 seconds)
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(mockData);
      setLoading(false);
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetcher()
  }, [])

  return {
    isLoading: loading,
    data
  }
}
