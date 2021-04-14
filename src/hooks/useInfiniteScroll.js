import { useState, useEffect } from 'react';

export default function useInfiniteScroll(query) {
  const [isReachBottom, setIsReachBottom] = useState(false);

  useEffect(() => {
    const el = document.querySelector(query);

    function onScroll() {
      if (el.clientHeight + el.scrollTop >= el.scrollHeight - 5) {
        setIsReachBottom(true);
      }
    }

    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, [query]);

  return [isReachBottom, setIsReachBottom];
}
