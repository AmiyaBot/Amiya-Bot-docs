<template>
    <div class="mirror">
        <div class="thanks">
            💐 特别感谢
            <a href="https://mirrorchyan.com" target="_blank">
                <img src="https://groupprohead.gtimg.cn/600104514042962957/100?t=1742635129190" alt="Mirror酱">
                Mirror酱
            </a>
            对本项目的大力支持！ 💐
        </div>
        <div class="text">
            Mirror酱是一个第三方应用分发平台，让开源应用的更新更简单。
        </div>
        <div class="text">用户付费使用，收益与开发者共享。此外，Mirror酱本身也是开源的。</div>
        <div class="text">
            <a href="https://mirrorchyan.com">https://mirrorchyan.com/zh/get-start</a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'mirrorChyan'
}
</script>

<style scoped>
.mirror {
    padding: 50px 0 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.thanks {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
}

img {
    display: inline;
    height: 45px;
    margin: 0 5px;
}

a {
    color: #b74ec9 !important;
    display: flex;
    align-items: center;
}

.text {
    padding-top: 10px;
    font-size: 18px;
}
</style>
