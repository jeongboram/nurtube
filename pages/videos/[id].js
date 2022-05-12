import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import { getSelectedVideosApi } from '../api/videoApi';
import View from 'components/videos/View'

export default function VideoDetail() {

    const router = useRouter();
    const { id } = router.query

    const [savedVideo, setSavedVideo] = useState([])

    const getVideoDetail = async () => {
        const datas = await getSelectedVideosApi(id)
        setSavedVideo(datas.data.items)
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
