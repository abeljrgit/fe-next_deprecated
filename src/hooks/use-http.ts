import { useCallback, useState } from 'react';
import { ApiData, ApiStatus } from '@types';

export const useHttp = () => {
  const [status, setStatus] = useState<ApiStatus>(ApiStatus.Initializing);
  const [api, setApi] = useState<ApiData>({
    data: null,
    error: null,
  });

  const sendRequest = useCallback(async (url = '', options: any = {}) => {
    setStatus(ApiStatus.Loading);
    setApi({ error: null, data: null });

    // Http request via fetch api
    try {
      const response = await fetch(url, {
        method: options.method ? options.method : 'GET',
        headers: options.headers ? options.headers : {},
        body: options.body ? JSON.stringify(options.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }
      setStatus(ApiStatus.Success);
      setApi({
        error: null,
        data: await response.json(),
      });
    } catch (err: any) {
      setStatus(ApiStatus.Error);
      setApi({ error: err.message, data: null });
    }

    // End
    setStatus(ApiStatus.Ending);
  }, []);

  return { status, api, sendRequest };
};
