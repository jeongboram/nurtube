import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, baseUrl } from 'const/index';
import Thumb from 'components/videos/Thumb';
import { useRef, forwardRef } from 'react';
import Loader from 'components/Loader';

const ThumbList = () => {
	const [target, setTarget] = useState(null);
	const [videos, setVideos] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	
	let resultNum = 25

	const getVideos = async () => {
		setIsLoaded(true);
		await axios
			.get(`${baseUrl}/videos?part=snippet&chart=mostPopular&maxResults=${resultNum}&key=${API_KEY}`)
			.then((res) => {
				setVideos(res.data.items)
			})
			.catch((e) => {
				console.log('Error:', e);
			});
		setIsLoaded(false);
	};

	const onIntersect = async ([entry], observer) => {
		if (entry.isIntersecting && !isLoaded) {
			observer.unobserve(entry.target)
			resultNum += 5
			await getVideos();
			if ( resultNum >= 50 ) return   // Max 50개
			observer.observe(entry.target);
		}
	};

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
			<div className="video-channels">
				{videos.map((video, index) => (
					<span key={index}>{video.snippet.channelTitle}</span>
				))}
			</div>
			<section className="video-list">
				{videos.map((video, index) => (
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
