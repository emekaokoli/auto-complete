import { OptionProps } from "@/___data___/mock";
import { useEffect, useState } from "react";

export type FilterSearchProps = {
  inputValue: string;
  data: OptionProps[]
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>
  highlightedIndex: number
  filteredOptions: OptionProps[]
  setFilteredOptions: React.Dispatch<React.SetStateAction<OptionProps[]>>
  setNotice: React.Dispatch<React.SetStateAction<string>>
};

export function useFilterSearch({ data, inputValue, setHighlightedIndex, highlightedIndex, setFilteredOptions, setNotice }: FilterSearchProps) {
  const [load, setLoad] = useState<boolean>(false);

  // Filter options asynchronously based on input value
  const filterOptions = async () => {
    const filtered = data.filter(option =>
      option.value.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (filtered.length === 0) {
      setNotice('Item not found');
    } else {
      setNotice('');
    }
    setFilteredOptions(filtered);
    setHighlightedIndex(-1);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    // Simulating asynchronously filter data by 10 seconds
    timeout = setTimeout(() => {
      setLoad(true)
      filterOptions();
      setLoad(false)
    }, 10000)

    return () => {
      clearTimeout(timeout)
    }

  }, [inputValue, data]);

  return {
    load,
    highlightedIndex,
    setFilteredOptions,
    setHighlightedIndex
  }
}
