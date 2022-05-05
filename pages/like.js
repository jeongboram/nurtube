import React, { useEffect, useState } from 'react'
import { API_KEY, baseUrl } from "const/index"
import axios from 'axios';

const LikeVideo = () => {

    //const [likeVideos, setLikeVideos] = useState([])
    const [savedIdList, setSavedIdList] = useState([])

    const getLikeVideos = () => {
        const savedId = JSON.parse(localStorage.getItem('LikeVideosID'))
        setSavedIdList(savedId)
        // for (let i=0;i<savedId.length;i++) {
        //     axios.get(`${baseUrl}/videos?part=snippet&id=${savedId[i]}&key=${API_KEY}`)
        //     .then((res) => {
        //         datas.push(res.data.items)
                
        //     }).catch( e => {
        //         console.log('Error:', e)
        //     })
        // }
    
    } 


    useEffect(() => {
        getLikeVideos()
    }, [])

    return (
        <>
            <section className='video-list'>
                {
                    savedIdList.map((video, index) => (
                        <>
                            <div key={index}>{video}</div>
                        </>
                    ))
                }
            </section>
        </>
    )
};

export default LikeVideo

