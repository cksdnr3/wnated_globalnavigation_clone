import { useCallback, useState } from 'react';

export default (initialState = null) => {
  const [input, setInput] = useState(initialState);

  const handler = useCallback((e) => {
    setInput(e.target.value);
  }, [input, initialState]);

  return [input, handler];
};
