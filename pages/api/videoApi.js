import axios from "axios";
import { API_KEY, baseUrl } from "const/index"

const instance = axios.create({
    baseURL: `${baseUrl}`,
    timeout: 10000,
    headers: {'Accept': '*/*', 'Content-Type': 'application/json' }
});


//리스트 가져오기
export const getVideosApi = (resultNum) => {
    return instance({
        url: `/videos?part=snippet&chart=mostPopular&maxResults=${resultNum}&key=${API_KEY}`,
        method: 'get',
    })
}


//특정 비디오 리스트 가져오기
export const getSelectedVideosApi = (id) => {
    return instance({
        url: `/videos?part=snippet&id=${id}&key=${API_KEY}`,
        method: 'get',
    })
}








