import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import { getSelectedVideosApi } from 'pages/api/videoApi';
import View from 'components/videos/View'

export default function VideoDetail() {

    const router = useRouter();
    const { id } = router.query

    console.log('router', router)
    const [video, setVideo] = useState([])

    const getVideoDetail = async () => {
        const datas = await getSelectedVideosApi(id)
        setVideo(datas.data.items)
        console.log('video', video)
    }

    const recLocalstorage = () => {
        const savedId = JSON.parse(localStorage.getItem('watched'))
        if ( !savedId ) {
            localStorage.setItem('watched', JSON.stringify([id]))
        } else {
            localStorage.setItem('watched', JSON.stringify([...savedId, id]))
        }
    }

    useEffect(() => {
        getVideoDetail()
        recLocalstorage()
    }, [])

    return (
        <>
            <section className='contents'>
                {
                    //<View video={video} />
                    video.map((video, index) => (
                        <View key={index} video={video} />
                    ))
                }
            </section>
        </>
    )
}
