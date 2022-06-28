import React, { useEffect, useState } from 'react';
import { getChannelVideos } from '../api/videoApi';

export default function Category({ data }) {

    const [videos, setVideos] = useState([])

    const datas = JSON.parse(data)
    const getVideoData = async () => {
        
        //const res = await getChannelId(datas.id)
        // const channelId = res.data.items[0].snippet.channelId
        const resData = await getChannelVideos(datas.id, 25)
        setVideos(resData.data.items)
    }
    

    useEffect(() => {
        getVideoData()
    }, [data])

    return (
        <>
            <section className='contents'>
                <h2>{datas.title}</h2>
                {
                    videos.map((video) => (
                        <p key={video.id.videoId}>{video.id.videoId}</p>
                    ))
                }
            </section>
        </>
    )
}

export const getServerSideProps = (context) => {
    const { data } = context.query

    return {
        props: { 
            data
        }
    }
}