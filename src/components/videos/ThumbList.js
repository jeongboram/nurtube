import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, baseUrl } from 'const/index';
import Thumb from 'components/videos/Thumb';

const ThumbList = () => {
	const [videos, setVideos] = useState([]);
	const [resultNum, setResultNum] = useState(25);

	const getVideos = async () => {
		await axios
			.get(`${baseUrl}/videos?part=snippet&chart=mostPopular&maxResults=${resultNum}&key=${API_KEY}`)
			.then((res) => {
				setVideos(res.data.items);
				console.log(res.data.items);
			})
			.catch((e) => {
				console.log('Error:', e);
			});
	};

	const onViewMore = () => {
		console.log('=== 더보기 버튼 클릭 ===');
        console.log('현재 리스트 갯수', resultNum)
        setResultNum(resultNum + 5);
        if ( resultNum >= 50 ) {
            document.querySelector('.btn-moreview').setAttribute('disabled', 'disabled')
        }
	};

	useEffect(() => {
		getVideos();
	}, [resultNum]);

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
			<button className="btn-moreview" onClick={onViewMore}>더보기</button>
		</>
	);
};

export default ThumbList;
