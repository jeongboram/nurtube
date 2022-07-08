import React, { useState, useEffect } from 'react'
import { getCommentsApi } from 'pages/api/videoApi'
import Loader from 'components/Loader';


function View({ videos }) {

    const { id } = videos
    const { title, tags, channelTitle, publishedAt, description, thumbnails } = videos.snippet

    const [comments, setComments] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    const getComment = async() => {
        setIsLoaded(true);
		const datas = await getCommentsApi(id, 25)
		setComments(datas.data.items)
		setIsLoaded(false);
    }

    useEffect(() => {
        getComment()
        console.log('commentscomments', comments)
    }, [])

    console.log('props', videos)

    


    return (
        <>
            <div className='video-view-wrapper'>
                <div className='video-thumb'>
                    <div className="thumb" style={{ backgroundImage: `url(${thumbnails.default.url})` }}></div>
                </div>
                <div className='video-des'>
                    <h1>{title}</h1>
                    <div className="author">{channelTitle}</div>
                    <em>{publishedAt}</em>
                    {
                        tags ? <ul className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))
                            }
                        </ul> : <></>
                    }
                    <p>{description}</p>
                </div>
                <div className='video-comment'>
                    <h2>Comments</h2>
                    <div className='comments-wrapper'>
                        <ul>
                            {
                                comments.map((comment) => (
                                    <li key={comment.id}>
                                        <div className='profile-thumb' style={{ backgroundImage: `url(${comment.snippet.topLevelComment.snippet.authorProfileImageUrl})` }}></div>
                                        <div className='des'>
                                            <div className='author'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</div>
                                            <div className='comment-text'>{comment.snippet.topLevelComment.snippet.textOriginal}</div>
                                            <div className='like-count'><span>Like : </span>{comment.snippet.topLevelComment.snippet.likeCount}</div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div>
                            {isLoaded && <Loader />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View

