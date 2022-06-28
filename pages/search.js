import React, { useEffect, useState } from 'react'
import Thumb from 'components/videos/Thumb'
import Loader from 'components/Loader';
import { useRouter } from 'next/router';

const Search = () => {

    const router = useRouter()

    

    const [target, setTarget] = useState(null);
    const [result, setResult] = useState([])
    const [resultNum, setResultNum] = useState(30)
    const [isLoaded, setIsLoaded] = useState(false);

    const more = () => {
        setIsLoaded(true);
        setResultNum((prev) => prev+=5)
        setIsLoaded(false);
    }

    const onIntersect = ([entry], observer) => {
		if (entry.isIntersecting && !isLoaded) {
			observer.unobserve(entry.target)
            more()
            if (resultNum >= 50) return
			observer.observe(entry.target);
		}
	};

    useEffect(() => {
        console.log('router.query.dataQ', router.query.dataQ)
    }, [router])

    // useEffect(() => {
    //     setResult(router.query.dataQ)
    // }, [result])

    useEffect(() => {
		let observer;
		if (target) {
			observer = new IntersectionObserver(onIntersect, {
				threshold: 0.5,     // 해당 타겟이 50% 보여졌을때 실행.
			});
			observer.observe(target);
		}
		return () => observer && observer.disconnect();
	}, [target]);

    return (
        <>
            {
                // result.length > 0 ? 
                // <>
                //     <section className="video-list">
                //         {result.slice(0,resultNum).map((data) => (
                //             <Thumb key={data.id.videoId} props={data} />
                //         ))}
                        
                //     </section>
                //     <div className='target-el' ref={setTarget}>
                //         {isLoaded && <Loader />}
                //     </div>
                // </> : <p>검색 결과 없음.</p>
            }
        </>
        
    )
}

export default Search
