import { OptionProps } from "@/___data___/mock";
import { useEffect, useState } from "react";

export type FilterSearchProps = {
  inputValue: string;
  data: readonly OptionProps[]
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>
  highlightedIndex: number
  filteredOptions: readonly OptionProps[]
  setFilteredOptions: React.Dispatch<React.SetStateAction<readonly OptionProps[]>>
  setNotice: React.Dispatch<React.SetStateAction<string>>
};

export function useFilterSearch({
  data,
  inputValue,
  setHighlightedIndex,
  setFilteredOptions,
  setNotice,
}: FilterSearchProps) {
  const [load, setLoad] = useState<boolean>(false);

  const filterOptions = async () => {
    try {
      // Simulating asynchronously filter data by 10 seconds
      setLoad(true)
      const filtered = data.filter((option) =>
        option.value.toLowerCase().includes(inputValue.toLowerCase())
      );
      setLoad(false);
      if (filtered.length === 0) {
        setNotice('Item not found');
      } else {
        setNotice('');
      }
      setFilteredOptions(filtered);
      setHighlightedIndex(-1);
    } catch (error: any) {
      setNotice('Error filtering options:');
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {
      filterOptions();
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue, data]);
  return {
    load,
    setHighlightedIndex,
    setFilteredOptions,
  };
}
