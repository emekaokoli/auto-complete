import { OptionProps } from '@/___data___/mock';
import { Loading } from '@/components/Loading/loading';
import { Input } from '@/components/input/input';
import { useFilterSearch } from '@/hooks/use_filter_search';
import { useGetData } from '@/hooks/use_get_data';
import '@/modules/search/search.css';
import { useState } from 'react';



const AutoComplete = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [filteredOptions, setFilteredOptions] = useState<OptionProps[]>([]);
  const [notice, setNotice] = useState<string>('');


  const { data, isLoading } = useGetData()
  const { load } = useFilterSearch({
    data,
    inputValue,
    setHighlightedIndex,
    highlightedIndex,
    setFilteredOptions,
    filteredOptions,
    setNotice
  })

  const handleOptionClick = (value: string) => {
    setInputValue(value);
    setFilteredOptions([]);
  };

  console.log({ notice, isLoading, load });

  if (isLoading) {
    return <Loading />;
  }


  return (
    <div className="auto-complete">
      <Input
        setInputValue={setInputValue}
        setHighlightedIndex={setHighlightedIndex}
        inputValue={inputValue}
        setFilteredOptions={setFilteredOptions}
        filteredOptions={filteredOptions}
        highlightedIndex={highlightedIndex}
      />
      {notice && (
        <p className="notice">{notice}</p>
      )}
      {isLoading || load ? (<Loading />) : (
        <ul className="options">
          {filteredOptions.map((option, index) => (
            <li
              key={option.id}
              onClick={() => handleOptionClick(option.value)}
              className={index === highlightedIndex ? 'highlighted' : ''}
            >
              {option.value.slice(0, option.value.toLowerCase().indexOf(inputValue.toLowerCase()))}
              <span className="highlight">
                {option.value.slice(
                  option.value.toLowerCase().indexOf(inputValue.toLowerCase()),
                  option.value.toLowerCase().indexOf(inputValue.toLowerCase()) + inputValue.length
                )}
              </span>
              {option.value.slice(option.value.toLowerCase().indexOf(inputValue.toLowerCase()) + inputValue.length)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
