import App from '../App'
import Home from '../page/Home'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: Home
    }]
}]