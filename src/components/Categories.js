import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getChannelList } from 'pages/api/videoApi'

function Categories() {

    const [channels, setChannels] = useState([])

    const getVideosLists = async() => {
        const datas = await getChannelList(25)
        setChannels(datas.data.items)
    }

    useEffect(() => {
        getVideosLists()

    }, [])
    

    return (
        <>
            <div className='nav-categories'>
                <ul>
                    {
                        channels.map((channel) => (
                            <li key={channel.etag}>
                                <Link as={`/categories/${channel.snippet.title}`}
                                    href={{
                                        pathname: `/categories/[id]`, 
                                        query: { data: channel.snippet.channelId}
                                    }}>
                                    <a>{channel.snippet.title}</a>
                                </Link>
                            </li>
                        ))
                    }
                    {
                        // channels.map((channel) => (
                        //     <li key={channel.id}>
                        //         <Link as={`/categories/${channel.title}`} 
                        //             href={{
                        //                 pathname: `/categories/[id]`, 
                        //                 query: { data: JSON.stringify(channel)}
                        //             }}>
                        //             <a>{channel.title}</a>
                        //         </Link>
                        //     </li>
                        // ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Categories