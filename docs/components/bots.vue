<template>
    <div class="bots">
        <a class="title"
           href="https://qun.qq.com/qunpro/robot/qunshare?robot_uin=2854197898&robot_appid=102068219&biz_type=0">
            群机器人一号
            <img src="https://amiyabot-1302462817.cos.ap-guangzhou.myqcloud.com/E0BA9D78918921391A5BE261A96C6F04.jpg"
                 alt="">
        </a>
        <a class="title"
           href="https://bot.q.qq.com/s/e0rb43g3b?id=102005657">
            群机器人二号（可私聊）
            <img src="https://amiyabot-1302462817.cos.ap-guangzhou.myqcloud.com/44187CD04E09613AB87E14059859BEE7.jpg"
                 alt="">
        </a>
        <a class="title"
           href="https://qun.qq.com/qunpro/robot/share?robot_appid=102005657">
            频道机器人（可私聊）
            <img src="https://amiyabot-1302462817.cos.ap-guangzhou.myqcloud.com/F7AB3AFE554027987502E5E1AB65746E.jpg"
                 alt="">
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
    font-size: 18px;
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
