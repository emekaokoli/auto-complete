import { OptionProps, mockData } from "@/___data___/mock";
import { useEffect, useState } from "react";


export function useGetData() {
  const [data, setData] = useState<OptionProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    const getData = () => {
      // Simulating asynchronous data fetching by using setTimeout 30 seconds
      setLoading(true);
      setData(mockData);
      setLoading(false)
    }
    getData()
  }, [setLoading, mockData])

  return {
    isLoading: loading,
    data
  }
}
