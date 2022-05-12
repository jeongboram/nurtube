import React from 'react'
import { useStores } from 'store/Context';

const Save = () => {

    const { videoStore } = useStores()

    console.log(videoStore)

    return (
        <div>save</div>
    )
}

export default Save
