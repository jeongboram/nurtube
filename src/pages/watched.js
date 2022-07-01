import React, { useEffect, useState } from 'react'
import { getSelectedVideosApi } from 'pages/api/videoApi'

const Watched = () => {

    const [watchedList, setWatchedList]  = useState([])

    const savedId = JSON.parse(localStorage.getItem('watched'))

    const getWatchedVideo = async() => {
        if ( savedId ) {
            //중복 ID값 제거하기.
            const results = savedId.filter((id, index, target) => { 
                return target.indexOf(id) === index; 
            });

            let resultsData = []
    
            for (let i=0;i<results.length;i++) {
                const datas = await getSelectedVideosApi(results[i])
                resultsData.push(datas.data.items)
            }

            setWatchedList(resultsData)
        } 
    }

    useEffect(() => {
        getWatchedVideo();
        
    }, [])

    return (
        <>
            <section className='video-list'>
                {
                    watchedList.map((watched) => (
                        <div key={watched.id}>{watched.id}</div>
                    ))
                }
            </section>
        </>
    )
};

export default Watched

