import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStores } from 'store/Context';
import { observer } from 'mobx-react'

const Thumb = observer(({ props }) => {
	const { id } = props;
	//const publishedDate = props.snippet.publishedAt;

	const [like, setLike] = useState(false)
	const { videoStore } = useStores()

	// const onLike = () => {
	// 	//LocalStorage 에 저장된 아이디 가져오기
	// 	const savedId = JSON.parse(localStorage.getItem('LikeVideosID'));
	// 	if (!savedId) {
	// 		localStorage.setItem('LikeVideosID', JSON.stringify([id]));
	// 	} else {
	// 		localStorage.setItem('LikeVideosID', JSON.stringify([...savedId, id]));
	// 	}
	// };

	const onLike = () => {
		videoStore.likeVideo(id, props)
		setLike((prev) => !prev)
	};

	const onDisLike = () => {
		videoStore.dislikeVideo(id)
	}

	const onSave = () => {
		videoStore.saveVideo(id)
	}

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
						<button onClick={onLike} className={like ? "like" : ""}>좋아요</button>
						<button onClick={onDisLike}>좋아요취소</button>
						<button onClick={onSave}>나중에보기</button>
					</div>
				</div>
			</article>
		</>
	);
})

export default Thumb;
