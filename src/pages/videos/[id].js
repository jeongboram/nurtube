import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import { getSelectedVideosApi } from 'pages/api/videoApi';
import View from 'components/videos/View'

export default function VideoDetail({ res }) {

    const router = useRouter();
    


    // const getVideoDetail = async() => {
    //     const datas = await getSelectedVideosApi(data)
    //     setVideos(datas)
    // }

    // const recLocalstorage = () => {
    //     const savedId = JSON.parse(localStorage.getItem('watched'))
    //     if ( !savedId ) {
    //         localStorage.setItem('watched', JSON.stringify([id]))
    //     } else {
    //         localStorage.setItem('watched', JSON.stringify([...savedId, id]))
    //     }
    // }

    // useEffect(() => {
    //     getVideoDetail()
    //     console.log('videosvideosvideos', queries)
    // }, [])

    console.log('videosvideosvideos', res[0])


    return (
        <>
            <section className='contents'>
                {
                    //<View video={video} />
                    // video.map((video, index) => (
                    //     <View key={index} video={res} />
                    // ))
                }
                <View videos={res[0]} />
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    const queries = await context.query
    const channelId = await queries.data
    const ress = await getSelectedVideosApi(channelId)

    return {
        props: { 
            queries,
            res: ress.data.items
        }
    }
}


// export async function getStaticProps(context) {


//     const queries = await context.query
//     //const videoId = await queries.id
//     //const ress = await getSelectedVideosApi(videoId)

//     return {
//         props: {
//             queries,
//             //res: ress.data.items
//         }
//     }
// }

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: {
//                     id: "Iiukq_ilT0Y",
//                 }
//             }
//         ],
//         fallback: true
//     }
// }

