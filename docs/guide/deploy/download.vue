<template>
    <a @click="download">下载最新可执行文件</a>
</template>

<script>
import axios from 'axios'

const cos = 'https://cos.amiyabot.com/package/release'

export default {
    name: 'download',
    methods: {
        download: function () {
            axios.get(`${cos}/latest-V6-dev.txt`).then(response => {
                window.open(`${cos}/AmiyaBot-${response.data}-dev.zip`)
            })
        }
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>
