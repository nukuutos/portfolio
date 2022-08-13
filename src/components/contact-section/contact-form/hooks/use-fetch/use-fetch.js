import { useCallback, useEffect, useRef, useState } from 'react';
import asyncCall from './async-call';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isCancelled = useRef(false);

  const asyncAction = useCallback(async (config) => {
    isCancelled.current = false;

    setIsLoading(true);

    const data = await asyncCall(config);

    if (!isCancelled.current) setIsLoading(false);

    return data || null;
  }, []);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      isCancelled.current = true;
    };
  }, []);

  return { asyncAction, isLoading, isCancelled };
};

export default useFetch;
