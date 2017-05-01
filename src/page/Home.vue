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
        <router-link v-for="(item, index) in rankList" @click="" :to="{ name: 'songList', params: { type: item.type }}">
            <top-show :song-img="item.songList[0].albumpic_big" :song-list="item.songList"></top-show>
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
                rankList: [],
            }
        },
        components: {
            Swipe, SwipeItem, Cell, TopShow
        },
        mounted() {
            this.rankList = [];
            for(let rank in dataGet) {
                let tmp = dataGet[rank];
                tmp.data.then(resp => {
                    this.rankList.push({
                       type: tmp.type,
                       songList: resp.data.showapi_res_body.pagebean.songlist
                    });
                });
            }
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