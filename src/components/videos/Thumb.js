import React, { useEffect } from 'react';
import Link from 'next/link';

function Thumb({ props }) {
	const { id } = props;
	const publishedDate = props.snippet.publishedAt;

	const onLike = () => {
		//LocalStorage 에 저장된 아이디 가져오기
		const savedId = JSON.parse(localStorage.getItem('LikeVideosID'));
		if (!savedId) {
			localStorage.setItem('LikeVideosID', JSON.stringify([id]));
		} else {
			localStorage.setItem('LikeVideosID', JSON.stringify([...savedId, id]));
		}
	};

	//console.log(publishedDate);

	return (
		<>
			<article className="video-thumb-wrapper">
				<div className="video-thumb">
					<Link href={`videos/${id}`}>
						<div className="thumb-inner">
							<div className="thumb" style={{ backgroundImage: `url(${props.snippet.thumbnails.default.url})` }}></div>
						</div>
					</Link>
				</div>
				<div className="video-des">
					<div className="author">{props.snippet.channelTitle}</div>
					<div className="des">
						<p>{props.snippet.title}</p>
						<strong>{props.snippet.channelTitle}</strong>
						<span>조회수 : 4만회</span>
						<span>{props.snippet.publishedAt}</span>
						<button onClick={onLike}>좋아요</button>
					</div>
				</div>
			</article>
		</>
	);
}

export default Thumb;
