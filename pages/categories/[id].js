import React, { useEffect, useState } from 'react';
import { getChannelVideos, getChannelList } from '../api/videoApi';

export default function Category({ data }) {

    const [videos, setVideos] = useState([])

    const datas = JSON.parse(data)

    const getVideoData = async () => {
        const resData = await getChannelVideos(datas.id, 25)
        console.log('resdata', resData)
        setVideos(resData.data.items)
    }
    
    useEffect(() => {
        getVideoData()
    }, [data])

    return (
        <>
            <section className='contents'>
                <h2>{datas.snippet.title}</h2>
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