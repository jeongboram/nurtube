import React, { useEffect, useState } from 'react';
import Thumb from 'components/videos/Thumb';
import Loader from 'components/Loader';
import { getVideosApi } from 'pages/api/videoApi'
import { useRouter } from 'next/router';

const ThumbList = ({ props }) => {
	const [target, setTarget] = useState(null);
	// const [videos, setVideos] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	
	// let resultNum = 25
	
	const router = useRouter()

	console.log(`this page is from ${router.pathname}`)

	

	// const onIntersect = async ([entry], observer) => {
	// 	if (entry.isIntersecting && !isLoaded) {
	// 		observer.unobserve(entry.target)
	// 		resultNum += 5
	// 		await getVideos();
	// 		if ( resultNum >= 50 ) return   // Max 50개
	// 		observer.observe(entry.target);
	// 	}
	// };


	// useEffect(() => {
	// 	let observer;
	// 	if (target) {
	// 		observer = new IntersectionObserver(onIntersect, {
	// 			threshold: 0.5,     // 해당 타겟이 50% 보여졌을때 실행.
	// 		});
	// 		observer.observe(target);
	// 	}
	// 	return () => observer && observer.disconnect();
	// }, [target]);


	


	return (
		<>
			{/* <div className="video-channels">
				{props.map((video, index) => (
					<span key={index}>{video.snippet.channelTitle}</span>
				))}
			</div> */}
			<section className="video-list">
				{props.map((video, index) => (
					<Thumb key={index} props={video} />
				))}
			</section>
			<div className='target-el' ref={setTarget}>
				{isLoaded && <Loader />}
			</div>
		</>
	);
};




export default ThumbList;
