import React, { useState, useEffect } from 'react'
import { getRelatedList } from 'pages/api/videoApi'
import Thumb from './videos/Thumb'
import ThumbList from './videos/ThumbList'


function Related(id) {

    

    const videoId = id.id
    let resultNum = 20

    const [relatedVideos, setRelatedVideos] = useState([])

    const getVideosLists = async() => {
        const datas = await getRelatedList(videoId, resultNum)
        setRelatedVideos(datas.data.items)
    }

    useEffect(() => {
        getVideosLists()
    }, [])


    return (
        <>
            <h3>Related Videos</h3>
            {
                <ThumbList props={relatedVideos} />
            }
        </>
    )
}

export default Related