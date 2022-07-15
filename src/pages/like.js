import React, { useEffect, useState } from 'react'
import { useStores } from 'store/Context';
import { toJS } from "mobx"; 
import { observer } from 'mobx-react'
import Thumb from 'components/videos/Thumb';
import ThumbList from 'components/videos/ThumbList';


const LikeVideo = observer(() => {

    const [savedVideo, setSavedVideo] = useState([])

    const { videoStore } = useStores()

    const getLikeVideos = () => {
        const likedata = toJS(videoStore.likeVideoList)
        setSavedVideo(likedata)
    } 

    console.log('savedVideo', savedVideo)
    
    useEffect(() => {
        getLikeVideos()
    }, [])


    return (
        <>
            <section className='contents'>
                {
                    savedVideo.length === 0 && <div>좋아요한 동영상이 없어요</div>
                }
                {
                    savedVideo.length > 0 && <ThumbList props={savedVideo} />
                }
            </section>
        </>
    )
});

export default LikeVideo

