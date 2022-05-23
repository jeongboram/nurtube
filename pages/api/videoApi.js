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


//특정 비디오 데이터 가져오기
export const getSelectedVideosApi = (id) => {
    return instance({
        url: `/videos?part=snippet&id=${id}&key=${API_KEY}`,
        method: 'get',
    })
}

//코멘트 가져오기
export const getCommentsApi = (id, num) => {
    return instance({
        url: `/commentThreads?part=snippet&videoId=${id}&maxResults=${num}&key=${API_KEY}`,
        method: 'get',
    })
}

//검색
export const getSearchResults = (q, num) => {
    return instance({
        url: `/search?q=${q}&part=snippet&maxResults=${num}&key=${API_KEY}`,
        method: 'get',
    })
}






