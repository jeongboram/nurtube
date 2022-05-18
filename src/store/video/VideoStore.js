import { action, makeObservable, observable } from "mobx"; 
import { getVideosApi } from "../../../pages/api/videoApi";


export class VideoStore {
    rootStore;

    savevideosIdx = []

    //video stores
    videosList = []

    //like videos data
    likeVideoList = []

    //saved videos data
    saveVideoList = []
    

    //title data



    constructor(root) {
        makeObservable(this, {
            savevideosIdx:observable, 
            likeVideoList:observable,
            saveVideoList:observable,
            videosList:observable,
            getVideoList:action,
            likeVideo:action,
            saveVideo:action,
            cancelLikeVideo:action,
        })
        this.rootStore = root
    }

    getVideoList(data) {
        this.videosList.push(data)
        this.videosList = [
            ...this.videosList,
            data
        ]
    }

    likeVideo(props) {
        this.likeVideoList.push(props)
    }
    cancelLikeVideo(id, props) {
        this.likeVideoList = this.likeVideoList.map((video) => {
            if ( video.id === id) {
                return {
                    ...video,
                    props
                }
            }
            return video
        })
    }
    // cancelLikeVideo(id) {
    //     const results = this.likeVideoList.filter((id, index, target) => {
    //         return target.indexOf(id) === index
    //     })
    //     console.log('cancel like videos', results)
    // }


    saveVideo(id) {
        this.savevideosIdx.push(id)
        //console.log('store', this.savevideosIdx)
    }
}