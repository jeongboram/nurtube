import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router"
import { getSelectedVideosApi } from 'pages/api/videoApi';
import View from 'components/videos/View'

export default function VideoDetail({ ress }) {

    const router = useRouter();
    const { id } = router.query

    // const [video, setVideo] = useState([])

    // const getVideoDetail = async () => {
    //     const datas = await getSelectedVideosApi(id)
    //     console.log('video', datas)
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
    // }, [])

    console.log('vidoes Dynamic router', ress)



    return (
        <>
            <section className='contents'>
                {
                    //<View video={video} />
                    // video.map((video, index) => (
                    //     <View key={index} video={res} />
                    // ))
                }
                <View props={ress} />
            </section>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const queries = await context.query
//     const channelId = await queries.data
//     const ress = await getSelectedVideosApi(channelId)

//     return {
//         props: { 
//             queries,
//             ress
//         }
//     }
// }


export async function getServerSideProps(context) {
    const queries = await context.query
    const videoId = await queries.id
    const ress = await getSelectedVideosApi(videoId)

    return {
        props: {
            res: ress.data.items
        }
    }
}
