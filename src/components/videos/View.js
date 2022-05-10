import React from 'react'

function View(props) {
    console.log('view props', props.video)

    const { title, tags, channelTitle, publishedAt, description, thumbnails } = props.video.snippet

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
            </div>
        </>
    )
}

export default View