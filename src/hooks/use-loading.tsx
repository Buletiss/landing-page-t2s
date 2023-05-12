import { useState, useEffect } from 'react';

export function useLoading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  return { showLoading };
}
