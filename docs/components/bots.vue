<template>
    <div class="bots">
        <a class="title"
           href="https://qun.qq.com/qunpro/robot/qunshare?robot_uin=2854197898&robot_appid=102068219&biz_type=0">
            点击或扫码添加到群聊
            <img src="/E0BA9D78918921391A5BE261A96C6F04.jpg" alt="">
        </a>
        <a class="title"
           href="https://qun.qq.com/qunpro/robot/share?robot_appid=102005657">
            点击或扫码添加到频道
            <img src="/F7AB3AFE554027987502E5E1AB65746E.jpg" alt="">
        </a>
    </div>
</template>

<script>

export default {
    name: 'bots'
}
</script>

<style scoped>
.bots {
    display: flex;
}

.title {
    color: #b74ec9;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    margin: 10px 0;
}

@media screen and (max-width: 768px) {
    .bots {
        flex-direction: column;
    }

    .title {
        font-size: 14px;
    }
}
</style>
