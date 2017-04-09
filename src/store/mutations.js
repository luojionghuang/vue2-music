const PLAY = 'PLAY';
const PAUSE = 'PAUSE';

export default {
	[PLAY](state) {
		state.playing = true;
	},
	[PAUSE](state) {
		state.playing = false;
	}
}