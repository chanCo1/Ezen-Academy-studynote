import { useEffect, useRef } from 'react';

// 페이지 로딩이 완료되었을을 감지하기 위한 커스텀 hook
const useMounterRef = () => {

  const mountedRef = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      mountedRef.current = true;
    })
  }, []);

  return mountedRef;

};

export default useMounterRef;