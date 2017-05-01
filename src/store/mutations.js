const AMERICA_SONG = 'AMERICA_SONG'
const PLAY = 'PLAY'
const PAUSE = 'PAUSE'

export default {
	[AMERICA_SONG](state, payload) {
		state.songList = payload.songList
	},
	[PLAY](state) {
		state.playing = true;
	},
	[PAUSE](state) {
		state.playing = false;
	}
}