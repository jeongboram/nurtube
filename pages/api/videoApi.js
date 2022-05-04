import axios from "axios";
import { API_KEY } from "const/index"


const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    timeout: 5000,
    headers: {'Accept': '*/*', 'Content-Type': 'application/json' }
})

export default {
    getVideos() {
        return instance({
            url: `videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,
            method: 'get'
        }).then((res) => {
            return res.data.items
        }).catch((e) => {
            console.log(e)
        });
    },
    getLikeVideos(params) {

    }
}