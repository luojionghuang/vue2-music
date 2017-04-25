<template>
    <div>
        <swipe :auto="4000" class="home-wrapper">
            <swipe-item>
                <img class="header-img" src="../images/1482312358874_.jpg">
            </swipe-item>
            <swipe-item>
                <img class="header-img" src="../images/1486821984806_.jpg">
            </swipe-item>
            <swipe-item>
                <img class="header-img" src="../images/T003R720x288M000002mryCr3VtdR3.jpg">
            </swipe-item>
            <swipe-item>
                <img class="header-img" src="../images/T003R720x288M000004Zu0uz1PYd2t.jpg">
            </swipe-item>
        </swipe>
        <audio id="music" v-bind:src="song"
             v-bind:autoplay="dataAutoPlay"
             v-bind:loop="isLoop"></audio>
        <router-link v-for="(item, index) in rankList" v-on:click="" :to="{ path: '/count', query: { id: item.id }}">
            <div>
                <div class="rank-img">
                    <img v-bind:src="item[0].albumpic_big" alt="" />
                </div>
                <div class="rank-list">
                    <div v-for="(item, index) in item">
                        {{index + 1}}.{{item.songname}}
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { Swipe, SwipeItem, Cell } from 'mint-ui'
    import dataGet from '../services/getData'
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
            Swipe, SwipeItem, Cell
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

<style scoped>
    .home-wrapper {
        height: 250px;
    }
    img.header-img {
        width: 100%;
        height: 250px;
    }
    .rank-img {
        display: inline-block;        
        width: 200px;
        height: 200px;
        overflow: hidden;
    }
    .rank-img img {
        width: 100%;
        height: 100%;
    }
    .rank-list {
        display: inline-block;
        height: 200px;
        overflow: hidden;
    }
</style>