"use client";

import AsyncSelect from "react-select/async";
import React, { useState, useEffect, useCallback } from "react";
import { SingleValue, MultiValue } from "react-select";
import { debounce } from "lodash";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options?: Option[];
  value?: Option | Option[] | null;
  onChange?: (value: Array<Option> | null) => void;
  isMulti?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  loadOptions?: (inputValue: string) => Promise<Option[]>;
  useDebounce?: boolean; // Control debounce
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options = [],
  value,
  onChange,
  isMulti = false,
  isDisabled = false,
  isLoading = false,
  placeholder = "Select...",
  loadOptions,
  useDebounce = true,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (selected: SingleValue<Option> | MultiValue<Option>) => {
    onChange && onChange(Array.isArray(selected) ? selected : [selected]);
  };

  // Ensure options load even when input is empty
  const fetchOptions = useCallback(
    useDebounce && loadOptions
      ? debounce(async (input: string) => {
          if (!input.trim()) {
            return options; // Show all options when input is empty
          }
          return loadOptions(input);
        }, 500)
      : async (input: string) => {
          if (!input.trim()) {
            return options; // Show all options when input is empty
          }
          return loadOptions ? loadOptions(input) : [];
        },
    [loadOptions, useDebounce, options]
  );

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={options} // Show options on first click
      loadOptions={fetchOptions}
      value={value}
      onChange={handleChange}
      isMulti={isMulti}
      isDisabled={isDisabled}
      isLoading={isLoading}
      placeholder={placeholder}
      inputValue={inputValue}
      onInputChange={setInputValue}
      isClearable
    />
  );
};

export default CustomSelect;