<template>
    <div class="wrapper">
        <audio id="music" :src="curSong"
             :autoplay="dataAutoPlay"
             :loop="isLoop"></audio>
        <ul>
            <li v-for="(item, index) in songList" @click="play(item)">
                <div class="song-img">
                    <img :src="item.albumpic_small" />
                </div>
                <div class="song-desc">
                    {{item.songname}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import dataGet from '../services/getData'
    export default {
        name: 'SongList',
        data() {
            return {
                type: this.$route.params.type,
                songList: [],
                curSong: null,
                dataAutoPlay: true,
                isLoop: true,
            }
        },
        methods: {
            play(song) {
                this.curSong = song.url;
            }
        },
        mounted() {
            for(let item in dataGet) {
                let tmp = dataGet[item];
                if(tmp.type === this.type) {
                    tmp.data.then(resp => {
                        this.songList = resp.data.showapi_res_body.pagebean.songlist
                    });
                    break;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $imgWidth: 50px;
    .wrapper {
        background-image: url(../assets/images/body-bg.jpg);
        ul {
            margin: 0;
            li {
                list-style: none;
            }
        }
    }
    .song-img {
        display: inline-block;
        width: $imgWidth;
    }
    .song-img img {
        width: $imgWidth;
    }
    .song-desc {
        display: inline-block;
        width: 200px;
    }
</style>