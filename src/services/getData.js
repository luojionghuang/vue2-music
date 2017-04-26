import fetch from '../config/fetch'

//参数：歌曲数据
const data = {
    //美国
    america: {
        url: 'https://route.showapi.com/213-4?showapi_appid=31967',
        params: {
            showapi_timestamp: null,
            topid: 3,
            showapi_sign: '7c45d428c1024a5e88c3cbc78a506646',
        }
    },
    //内地
    hinterland: {
        url: 'https://route.showapi.com/213-4?showapi_appid=31967',
        params: {
            showapi_timestamp: null,
            topid: 5,
            showapi_sign: '7c45d428c1024a5e88c3cbc78a506646',
        }
    },
    //香港
    hongkong: {
        url: 'https://route.showapi.com/213-4?showapi_appid=31967',
        params: {
            showapi_timestamp: null,
            topid: 6,
            showapi_sign: '7c45d428c1024a5e88c3cbc78a506646',
        }
    },
    //日本
    jp: {
        url: 'https://route.showapi.com/213-4?showapi_appid=31967',
        params: {
            showapi_timestamp: null,
            topid: 17,
            showapi_sign: '7c45d428c1024a5e88c3cbc78a506646',
        }
    },
    //热榜
    hot: {
        url: 'https://route.showapi.com/213-4?showapi_appid=31967',
        params: {
            showapi_timestamp: null,
            topid: 26,
            showapi_sign: '7c45d428c1024a5e88c3cbc78a506646',
        }
    }
}

export default {
    //美国
    getAmerica: fetch(data.america.url, data.america.params),
    //内地
    getHinterland: fetch(data.hinterland.url, data.hinterland.params),
    //香港
    getHongkong: fetch(data.hongkong.url, data.hongkong.params),
    //日本
    getJp: fetch(data.jp.url, data.jp.params),
    //热榜
    getHot: fetch(data.hot.url, data.hot.params),
}