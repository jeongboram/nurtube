import React, { useEffect, useState } from 'react';
import Thumb from 'components/videos/Thumb'
import ThumbList from 'components/videos/ThumbList';
import { getChannelVideos } from 'pages/api/videoApi'
import { useRouter } from "next/router"

export default function Category({ queries, res }) {
    
    const router = useRouter();
    const { id } = router.query


    return (
        <>
            <section className='contents'>
                <h2>{queries.id}</h2>
                <section className='contents'>
                    <ThumbList props={res} />
                </section>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    const queries = await context.query
    const channelId = await queries.data
    const ress = await getChannelVideos(channelId, 25)

    return {
        props: { 
            queries,
            res: ress.data.items
        }
    }
}