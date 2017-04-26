<template>
    <div class="wrapper">
        <swipe :auto="4000" class="header-wrapper">
            <swipe-item>
                <img class="header-img" src="../assets/images/1482312358874_.jpg">
            </swipe-item>
            <swipe-item>
                <img class="header-img" src="../assets/images/1486821984806_.jpg">
            </swipe-item>
            <swipe-item>
                <img class="header-img" src="../assets/images/T003R720x288M000002mryCr3VtdR3.jpg">
            </swipe-item>
            <swipe-item>
                <img class="header-img" src="../assets/images/T003R720x288M000004Zu0uz1PYd2t.jpg">
            </swipe-item>
        </swipe>
        <audio id="music" v-bind:src="song"
             v-bind:autoplay="dataAutoPlay"
             v-bind:loop="isLoop"></audio>
        <router-link v-for="(item, index) in rankList" v-on:click="" :to="{ path: '/count', query: { id: item.id }}">
            <top-show :song-img="item[0].albumpic_big" :song-list="item"></top-show>
        </router-link>
    </div>
</template>

<script>
    import { Swipe, SwipeItem, Cell } from 'mint-ui'
    import dataGet from '../services/getData'
    import TopShow from '../components/TopShow'
    export default {
        data() {
            return {
                song: null,
                dataAutoPlay: true,
                isLoop: true,
                rankList: [],
            }
        },
        components: {
            Swipe, SwipeItem, Cell, TopShow
        },
        mounted() {
            this.rankList = [];
            for(var rank in dataGet) {
                dataGet[rank].then(resp => this.rankList.push(resp.data.showapi_res_body.pagebean.songlist));
            }
            dataGet.getJp.then(resp => {
                console.log(resp.data.showapi_res_body.pagebean);
                this.song = resp.data.showapi_res_body.pagebean.songlist[0].url;
                this.image = resp.data.showapi_res_body.pagebean.songlist[0].albumpic_big;
            }).catch(err => {
                console.log(err);
            });
        }
    }
</script>

<style lang="scss" scoped>
    $headerHeight: 250px;
    .wrapper {
        background-image: url(../assets/images/body-bg.jpg);
    }
    .header-wrapper {
        height: $headerHeight;
    }
    img.header-img {
        width: 100%;
        height: $headerHeight;
    }
</style>