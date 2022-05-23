import React, { useEffect, useState } from 'react'
import Thumb from 'components/videos/Thumb'

const Search = ({ searhResults }) => {

    const [result, setResult] = useState([])

    useEffect(() => {
        setResult(searhResults)

    }, [result, searhResults])


    return (
        <>
            {
                result.length > 0 ? 
                <section className="video-list">
                    {result.map((data) => (
                        <Thumb key={data.id.videoId} props={data} />
                    ))}
                </section> : <p>검색 결과 없음.</p>
            }
        </>
        
    )
}

export default Search
