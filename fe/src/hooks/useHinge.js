import { useCallback, useState } from 'react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

  return [isOpen, openHandler, closeHandler];
};
