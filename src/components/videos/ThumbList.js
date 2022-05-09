import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, baseUrl } from 'const/index';
import Thumb from 'components/videos/Thumb';
import { useRef, forwardRef } from 'react';
import Loader from 'components/Loader';

const ThumbList = () => {
	const [target, setTarget] = useState(null);
	const [videos, setVideos] = useState([]);
	const [resultNum, setResultNum] = useState(25);
	const [isLoaded, setIsLoaded] = useState(false);
	

	const getVideos = async () => {
		setIsLoaded(true);
		await axios
			.get(`${baseUrl}/videos?part=snippet&chart=mostPopular&maxResults=${resultNum}&key=${API_KEY}`)
			.then((res) => {
				setVideos((videos) => videos.concat(res.data.items))
			})
			.catch((e) => {
				console.log('Error:', e);
			});
		setIsLoaded(false);
	};


	// const onViewMore = () => {
	// 	console.log('=== 더보기 버튼 클릭 ===');
    //     console.log('현재 리스트 갯수', resultNum)
    //     setResultNum(resultNum + 5);
    //     if ( resultNum >= 50 ) {
    //         document.querySelector('.btn-moreview').setAttribute('disabled', 'disabled')
    //     }
	// 	console.log('itemRef', itemRef)
	// };

	const onIntersect = async ([entry], observer) => {
		if (entry.isIntersecting && !isLoaded) {
			observer.unobserve(entry.target)
			await getVideos()
			observer.observe(entry.target);
		}
	};

	useEffect(() => {
		console.log('useEffect getVideos() Update')
	
	}, []);
	
	useEffect(() => {
		let observer;
		if (target) {
			observer = new IntersectionObserver(onIntersect, {
				threshold: 0.5,
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
