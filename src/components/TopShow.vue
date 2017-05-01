<template>
    <div>
        <div class="rank-img">
            <img :src="songImg" alt="" />
        </div>
        <div class="rank-list">
            <div v-for="(item, index) in songList">
                {{index + 1}}.{{item.songname}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopShow',
        props: {
            songImg: {
                type: String
            },
            songList: {
                type: Array,
                default: []
            },
        }
    }
</script>

<style lang="scss">
    $imgWidth: 200px;
    $imgHeight: 200px;
    $listWidth: calc(100% - 210px);
    .rank-img {
        display: inline-block;
        width: $imgWidth;
        height: $imgHeight;
        overflow: hidden;
    }
    .rank-img img {
        width: 100%;
        height: 100%;
    }
    .rank-list {
        display: inline-block;
        width: $listWidth;
        height: $imgHeight;
        overflow: hidden;
    }
</style>