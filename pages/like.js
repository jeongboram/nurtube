import React, { useEffect, useState } from 'react'
import { API_KEY, baseUrl } from "const/index"
import axios from 'axios';

const LikeVideo = () => {

    const [likeVideos, setLikeVideos] = useState([])

    const getLikeVideos = () => {
        const savedId = JSON.parse(localStorage.getItem('LikeVideosID'))
        setLikeVideos(savedId)
        for (let i=0;i<savedId.length;i++) {

            //console.log('savedId[i]', typeof savedId[i])
            // await axios.get(`${baseUrl}/videos?part=snippet&id=${savedId[i]}&key=${API_KEY}`)
            // .then((res) => {
            //     setLikeVideos(res.data.items)
            // }).catch( e => {
            //     console.log('Error:', e)
            // })
        }

    
    } 


    useEffect(() => {
        getLikeVideos()
    }, [])

    return (
        <>
            <section className='video-list'>
                {
                    likeVideos.map((video, index) => (
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

