"use client";

import React, { useState, useEffect, useCallback } from "react";
import Select, { SingleValue, MultiValue } from "react-select";
import { debounce } from "lodash";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options?: Option[];
  value?: Option | Option[] | null;
  onChange: (value: Option | Option[] | null) => void;
  isMulti?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  useDebounce?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options = [],
  value,
  onChange,
  isMulti = false,
  isDisabled = false,
  isLoading = false,
  placeholder = "Select...",
  useDebounce = true,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  // Debounced function for filtering options
  const filterOptions = useCallback(
    debounce((input: string) => {
      if (!input.trim()) {
        setFilteredOptions(options);
      } else {
        setFilteredOptions(
          options.filter((option) =>
            option.label.toLowerCase().includes(input.toLowerCase())
          )
        );
      }
    }, 500),
    [options]
  );

  // Effect to update options when input changes
  useEffect(() => {
    if (useDebounce) {
      filterOptions(inputValue);
    } else {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
  }, [inputValue, options, useDebounce, filterOptions]);

  const handleChange = (selected: SingleValue<Option> | MultiValue<Option>) => {
    if (isMulti) {
      onChange(selected as Option[]);
    } else {
      onChange(selected as Option | null);
    }
  };

  return (
    <Select
      options={filteredOptions}
      value={value}
      onChange={handleChange}
      isMulti={isMulti}
      isDisabled={isDisabled}
      isLoading={isLoading}
      placeholder={placeholder}
      isClearable
      inputValue={inputValue}
      onInputChange={(input) => setInputValue(input)}
    />
  );
};

export default CustomSelect;