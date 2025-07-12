import { useEffect, useState } from "react";

function useDebounce(initialDebounceValue, value) {
  const [debouncedValue, setDebouncedValue] = useState(initialDebounceValue);
  const [isLoading, setIsLoading] = useState(false);

  async function SearchValueInDb() {
    console.log(`Calling API request for ${value.value}....`);
    setDebouncedValue([1, 1, 1, 1, 1, 1]);
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    const handler = setTimeout(() => SearchValueInDb(), value.delay);
    return () => clearTimeout(handler);
  }, [value]);

  return { debouncedValue, isLoading };
}

export default useDebounce;
