import { useState, useEffect } from "react";

function useGetData(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        // 이전 요청의 결과가 나중에 반영되는 것을 방지
        const controller = new AbortController();

        const getData = async ()=>{
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error("데이터를 불러오지 못했습니다!!");
                }

                const result = await response.json();

                setData(result);

            } catch (err) {
                console.log(err);
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        getData();
        
        return () => {
            controller.abort();
        };

    }, [url]);

    return {
        data,
        loading,
        error
    };
}

export default useGetData;