<template>
    <div>
        <swipe :auto="4000" class="home-wrapper">
            <swipe-item>
                <img src="../images/1482312358874_.jpg">
            </swipe-item>
            <swipe-item>
                <img src="../images/1486821984806_.jpg">
            </swipe-item>
            <swipe-item>
                <img src="../images/T003R720x288M000002mryCr3VtdR3.jpg">
            </swipe-item>
            <swipe-item>
                <img src="../images/T003R720x288M000004Zu0uz1PYd2t.jpg">
            </swipe-item>
        </swipe>
        <table class="audio-list">
            <tbody>
                <tr>
                    <td><img src="../images/T003R720x288M000004Zu0uz1PYd2t.jpg"></td>
                    <td><span>aaa</span></td>
                </tr>
                <tr>
                    <td><img src="../images/T003R720x288M000004Zu0uz1PYd2t.jpg"></td>
                    <td><span>aaa</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { Swipe, SwipeItem, Cell } from 'mint-ui'
    export default {
        data() {
            return {}
        },
        components: {
            Swipe, SwipeItem, Cell
        }
    }
</script>

<style scoped>
    .home-wrapper {
        height: 250px;
    }
    img {
        width: 100%;
        height: 250px;
    }
    .audio-list {
        padding: 0;
        width: 100%;
    }
    .audio-list tr td {
        border-bottom: 1px solid #ccc;
    }
    .audio-list tr td:nth-child(2n+1) {
        width: 200px;
    }
    .audio-list tr td:nth-child(2n) {
        width: calc(100% - 200px);
    }
</style>