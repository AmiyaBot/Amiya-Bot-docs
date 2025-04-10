<template>
    <div class="user-list">
        <div class="user">
            <img class="avatar" src="https://q1.qlogo.cn/g?b=qq&nk=1391939232&s=640" alt="">
            <div class="user-name">
                <span class="name" style="color: #f44336; font-size: 18px">神秘幕后大佬</span>
                <span class="desc"></span>
            </div>
        </div>
        <div class="user">
            <img class="avatar" src="https://q1.qlogo.cn/g?b=qq&nk=1020535998&s=640" alt="">
            <div class="user-name">
                <span class="name">MistEO</span>
                <span class="desc">Mirror酱主创、MAA主创、兔兔项目赞助者</span>
            </div>
        </div>
        <div class="user">
            <img class="avatar" src="https://q1.qlogo.cn/g?b=qq&nk=3061243068&s=640" alt="">
            <div class="user-name">
                <span class="name">Initial heart</span>
                <span class="desc">社区风纪委员、文档顾问、Logo贡献者</span>
            </div>
        </div>
        <div class="user">
            <img class="avatar" src="https://q1.qlogo.cn/g?b=qq&nk=457586001&s=640" alt="">
            <div class="user-name">
                <span class="name">hsyhhssyy</span>
                <span class="desc">插件作者、兔兔 AI 维护者</span>
            </div>
        </div>
        <div class="user">
            <img class="avatar" src="https://q1.qlogo.cn/g?b=qq&nk=2300652404&s=640" alt="">
            <div class="user-name">
                <span class="name">天基</span>
                <span class="desc">插件作者、插件服务器贡献者</span>
            </div>
        </div>
        <div class="user">
            <img class="avatar" src="https://q1.qlogo.cn/g?b=qq&nk=1961411984&s=640" alt="">
            <div class="user-name">
                <span class="name">.Tdp</span>
                <span class="desc">插件作者、百度图像识别接口贡献者</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'specialThanks'
}
</script>

<style scoped>
.user-list {

}

.user {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #b74ec9;
    margin-left: 5px;
}

.small .avatar {
    width: 40px;
    height: 40px;
}

.user-name {
    width: calc(100% - 85px);
    margin: 0 20px 0 10px;
    display: flex;
    flex-direction: column;
}

.user-name > .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.desc {
    font-weight: bold;
    color: #b74ec9;
}
</style>
