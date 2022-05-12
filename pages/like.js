import React, { useEffect, useState } from 'react'
import { useStores } from 'store/Context';
import { toJS } from "mobx"; 
import { observer } from 'mobx-react'
import Thumb from 'components/videos/Thumb';


const LikeVideo = observer(() => {

    const [savedVideo, setSavedVideo] = useState([])

    const { videoStore } = useStores()

    const getLikeVideos = () => {
        const likedata = toJS(videoStore.likeVideoList)
        setSavedVideo(likedata)
    } 

    useEffect(() => {
        getLikeVideos()
    }, [savedVideo])

    return (
        <>
            <section className='video-list'>
                {
                    savedVideo.length === 0 && <div>좋아요한 동영상이 없어요</div>
                }
                {
                    savedVideo.length > 0 && <>
                        {
                            savedVideo.map((video, index) => (
                                <>
                                    <Thumb key={index} props={video} />
                                </>
                            ))
                        }
                    </>
                }
            </section>
        </>
    )
});

export default LikeVideo

