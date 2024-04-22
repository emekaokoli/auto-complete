import { OptionProps } from "@/___data___/mock";

type Props = {
  inputValue: string;
  setInputValue: (value: React.SetStateAction<string>) => void
  setHighlightedIndex: (value: React.SetStateAction<number>) => void
  setFilteredOptions: (value: React.SetStateAction<OptionProps[]>) => void
  filteredOptions: OptionProps[]
  highlightedIndex: number
}

export const Input = ({
  inputValue,
  setInputValue,
  setHighlightedIndex,
  setFilteredOptions,
  filteredOptions,
  highlightedIndex
}: Props) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prevIndex =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (e.key === 'Enter' && highlightedIndex !== -1) {
      e.preventDefault();
      setInputValue(filteredOptions[highlightedIndex].value);
      setFilteredOptions([]);
    }
  };
  console.log({
    inputValue,
    setInputValue,
    setHighlightedIndex,
    setFilteredOptions,
    filteredOptions,
    highlightedIndex
});
  

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Search products..."
      className="input"
    />
  )
}