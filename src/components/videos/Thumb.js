import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStores } from 'store/Context';
import { observer } from 'mobx-react'
import { calDate } from 'const/func';
import { useRouter } from 'next/router';

const Thumb = observer(({ props, videoId }) => {

	//const { id } = props;
	const id = props.id

	const [like, setLike] = useState(false)
	const { videoStore } = useStores()
	const [dates, setDates] = useState('')

	const router = useRouter()


	// const onLike = () => {
	// 	//LocalStorage 에 저장된 아이디 가져오기
	// 	const savedId = JSON.parse(localStorage.getItem('LikeVideosID'));
	// 	if (!savedId) {
	// 		localStorage.setItem('LikeVideosID', JSON.stringify([id]));
	// 	} else {
	// 		localStorage.setItem('LikeVideosID', JSON.stringify([...savedId, id]));
	// 	}
	// };

	// console.log(`this page is from ${router.pathname}`)
	// console.log('pp', props.id)

	console.log('thubms id ', videoId)

	const getCalDatas = () => {
		const publishedDate = props.snippet.publishedAt;
		setDates(calDate(publishedDate))
	}

	const onLike = () => {
		setLike((prev) => {
			!prev
			videoStore.likeVideo(props, !prev)
		})
	};

	const onSave = () => {
		videoStore.saveVideo(id)
	}

	useEffect(() => {
		getCalDatas()
	}, [dates])

	useEffect(() => {
		
	}, [props, like])


	return (
		<>
			<article className="video-thumb-wrapper">
				<div className="video-thumb">
					<Link as={`/videos/${videoId}`} 
						href={{
							pathname: `/videos/[id]`,
							query: { data: videoId }
						}}>
						<a>
							<div className="thumb-inner">
								<div className="thumb" style={{ backgroundImage: `url(${props.snippet.thumbnails.default.url})` }}></div>
							</div>
						</a>
					</Link>
				</div>
				<div className="video-des">
					<div className="author">{props.snippet.channelTitle}</div>
					<div className="des">
						<p>{props.snippet.title}</p>
						<strong>{props.snippet.channelTitle}</strong>
						<span>{dates}</span>
						<span>{props.snippet.publishedAt}</span>
						<button onClick={onLike} className={props.likeBtn ? "like" : ""}>좋아요</button>
						<button onClick={onSave}>나중에보기</button>
					</div>
				</div>
			</article>
		</>
	);
})

export default Thumb;
