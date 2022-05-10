import { VideoStore } from './video/VideoStore'

export class RootStore {

    videoStore

    constructor() {
        this.videoStore = new VideoStore(this)
    }
}