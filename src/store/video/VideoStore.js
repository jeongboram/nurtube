import { action, makeObservable, observable } from "mobx"; 


export class VideoStore {
    rootStore;

    likevideosIdx = []
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
            //likevideosIdx:observable,  
            savevideosIdx:observable, 
            likeVideoList:observable,
            saveVideoList:observable,
            likeVideo:action,
            saveVideo:action,
        })
        this.rootStore = root

    }

    getVideoList(data) {
        this.videosList.push(data)
        console.log('getVideoList', this.videosList)
    }

    likeVideo(id, props) {
        this.likeVideoList.push(props)
    }

    dislikeVideo(id) {
        const dislikeIdx = this.likevideosIdx.filter(x => x.id !== id)  //indexOf 
        this.likevideosIdx = dislikeIdx
        //console.log('dislikevideo', this.likevideosIdx)
    }

    saveVideo(id) {
        this.savevideosIdx.push(id)
        //console.log('store', this.savevideosIdx)
    }
}