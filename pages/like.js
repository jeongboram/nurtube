import React, { useEffect, useState } from 'react'
import { API_KEY, baseUrl } from "const/index"
import axios from 'axios';
import { useStores } from 'store/Context';
import Thumb from 'components/videos/Thumb';


const LikeVideo = () => {

    const [savedIdList, setSavedIdList] = useState([])
    const [savedVideo, setSavedVideo] = useState()

    const { videoStore } = useStores()

    const getLikeVideos = async () => {
        let datas = []
        for (let i=0;i<savedIdList.length;i++) {
            await axios.get(`${baseUrl}/videos?part=snippet&id=${savedIdList[i]}&key=${API_KEY}`)
            .then((res) => {
                datas = [
                    ...datas,
                    res.data.items
                ]
            }).catch( e => {
                console.log('Error:', e)
            })
        }
        setSavedVideo(datas)
    } 

    useEffect(() => {
        setSavedIdList(videoStore.likevideosIdx)
        getLikeVideos()
    }, [savedIdList])


    return (
        <>
            <section className='video-list'>
                {
                    savedIdList.length === 0 && <div>좋아요한 동영상이 없어요</div>
                }
                {
                    savedIdList.length > 0 && <>
                        {
                            savedVideo.map((video, index) => (
                                <>
                                    <Thumb key={index} props={video[0]} />
                                </>
                            ))

                            
                        }
                    </>
                }
            </section>
        </>
    )
};

export default LikeVideo

