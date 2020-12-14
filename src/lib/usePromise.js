// 타이밍과 상태를 정의
import { useState, useEffect } from "react";

// promiseCreator: 비동기 처리 대상 함수 (대기해야 할 함수 - await)
// deps: 의존성 리스트
export default function usePromise(promiseCreator, deps) {
  // (로딩 / 완료 / 에러) 에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  // 잘못된 처리
  //  => useEffect(async () => {}, deps);
  //   => 랜더링중에 비동기 처리하겠다는 뜻이 되어버린다.

  // 1. 동기 처리를 한다.
  useEffect(() => {
    // 2. 비동기 처리 함수를 만들고
    const process = async () => {
      setLoading(true);

      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    // 3. 따로 호출한다.
    process();
  }, deps);

  return [loading, resolved, error];
}
