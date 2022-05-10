import { action, makeObservable, observable } from "mobx"; 

class Video {
    id

    constructor(id) {
        this.id = id
    }

}

export class VideoStore {
    rootStore;

    likevideosIdx = []

    constructor(root) {
        makeObservable(this, {
            likevideosIdx:observable,  
            likeVideo:action,
        })
        this.rootStore = root

    }

    likeVideo(id) {
        this.likevideosIdx.push(id)
    }
}