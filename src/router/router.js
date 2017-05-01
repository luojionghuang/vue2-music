import App from '../App'
import Home from '../page/Home'
import SongList from '../page/SongList'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: Home
    }, {
        name: 'songList',
        path: 'song-list/:type',
        component: SongList
    }]
}]