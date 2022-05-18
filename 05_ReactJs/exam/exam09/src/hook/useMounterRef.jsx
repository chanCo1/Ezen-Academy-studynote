import React, { useEffect, useRef } from 'react';

// 페이지 로딩이 완료되었음을 감지하기 위한 커스텀 hook
// const useMounterRef = () => {

//   const mountedRef = useRef(false);

//   useEffect(() => {
//     setTimeout(() => {
//       mountedRef.current = true;
//     })
//   }, []);

//   return mountedRef;
// };

// export default useMounterRef;


// 페이지 로딩이 완료되었음을 감지하기 위한 커스텀 hook
export default function useMounterRef() {

  const mountedRef = useRef(false);

  useEffect(() => {
    // 마운트 후 약간의 시간차를 주고 true로 변경
    setTimeout(() => {
      mountedRef.current = true;
    })
  }, []);

  return mountedRef;
};