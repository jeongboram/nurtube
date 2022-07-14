import React, { useEffect, useState } from 'react'
import Thumb from 'components/videos/Thumb'
import Loader from 'components/Loader';
import { useRouter } from 'next/router';
import { getSearchResults } from 'pages/api/videoApi'
import ThumbList from 'components/videos/ThumbList';

const Search = (props) => {

    const router = useRouter()

    const q = router.query.dataQ
    const [res, setRes] = useState([])

    const getSrchResults = async() => {
        const datas = await getSearchResults(q, 50)
        setRes(datas.data.items)
    }
    
    useEffect(() => {
        getSrchResults();
    }, [q])


    return (
        <>
            {
                res.length === 0 && <div>동영상이 없어요</div>
            }
            {
                res.length > 0 && <ThumbList props={res} />
            }
        </>
        
    )
}

export default Search
