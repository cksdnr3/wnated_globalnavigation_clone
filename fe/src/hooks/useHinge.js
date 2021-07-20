import { useCallback } from 'react';

export default (setter = null) => {
  const openHandler = useCallback(() => {
    setter(true);
  }, []);
  const closeHandler = useCallback(() => {
    setter(false);
  }, []);

  return [openHandler, closeHandler];
};
