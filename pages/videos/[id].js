import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import axios from 'axios';
import { API_KEY, baseUrl } from 'const/index';
import View from 'components/videos/View'


export default function VideoDetail() {

    const router = useRouter();
    const { id } = router.query

    const [savedVideo, setSavedVideo] = useState([])

    const getVideoDetail = async () => {
        await axios.get(`${baseUrl}/videos?part=snippet&id=${id}&key=${API_KEY}`)
            .then((res) => {
                console.log('res.data.items', res.data.items)
                setSavedVideo(res.data.items)
            }).catch( e => {
                console.log('Error:', e)
            })
    } 

    useEffect(() => {
        getVideoDetail()
    }, [])

    return (
        <>
            <section className='contents'>
                {
                    savedVideo.map((video, index) => (
                        <View key={index} video={video} />
                    ))
                }
            </section>
        </>
    )
}
