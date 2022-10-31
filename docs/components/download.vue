<template>
    <div>
        {{ text }}：<a @click="download">{{ latest }}-{{ version }}.zip</a>
    </div>
</template>

<script>
import axios from 'axios'

const cos = 'https://cos.amiyabot.com/package/release'

export default {
    name: 'download',
    props: {
        version: String,
        text: String
    },
    data() {
        return {
            latest: ''
        }
    },
    methods: {
        download: function () {
            window.open(`${cos}/AmiyaBot-${this.latest}-${this.version}.zip`)
        }
    },
    mounted() {
        axios.get(`${cos}/latest-V6-${this.version}.txt`).then(response => {
            this.latest = response.data.toString().replace(/\r\n/g, '')
        })
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>
