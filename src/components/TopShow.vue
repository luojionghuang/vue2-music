<template>
    <div>
        <div class="rank-img">
            <img v-bind:src="songImg" alt="" />
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