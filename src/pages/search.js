import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { getSearchResults } from 'pages/api/videoApi'
import ThumbList from 'components/videos/ThumbList';

const Search = () => {

    const router = useRouter()
    const q = router.query.keyword

    const [res, setRes] = useState([])

    const getSrchResults = async() => {
        const datas = await getSearchResults(q, 50)
        setRes(datas.data.items)
    }
 

    useEffect(() => {
        getSrchResults()
    }, [q])


    return (
        <>
            {
                res.length > 0 && <ThumbList props={res} />
            }
        </>
        
    )
}

export default Search
