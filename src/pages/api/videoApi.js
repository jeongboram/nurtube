import axios from "axios";
import { API_KEY, baseUrl } from "const/index"

const instance = axios.create({
    baseURL: `${baseUrl}`,
    timeout: 10000,
    headers: {'Accept': '*/*', 'Content-Type': 'application/json' }
});


//리스트 가져오기
export const getVideosApi = (num) => {
    return instance({
        url: `/videos?part=snippet&chart=mostPopular&maxResults=${num}&key=${API_KEY}`,
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

//채널 카테고리 ID
export const getChannelId = (id) => {
    return instance({
        url: `/videoCategories?part=snippet&id=${id}&key=${API_KEY}`,
        method: 'get',
    })
}

//채널 카테고리 리스트
export const getChannelVideos = (channelId, num) => {
    return instance({
        url: `/search?part=snippet&playlistId=${channelId}&maxResults=${num}&key=${API_KEY}`,
        method: 'get',
    })
}

//채널 리스트
export const getChannelList = (num) => {
    return instance({
        url: `/videoCategories?part=snippet&&maxResults=${num}&regionCode=KR&key=${API_KEY}`,
        method: 'get',
    })
}

//관련 영상
export const getRelatedList = (id, num) => {
    return instance({
        url: `/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=${num}&key=${API_KEY}`,
        method: 'get',
    })
}