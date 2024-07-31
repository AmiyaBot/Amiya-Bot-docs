<template>
    <div class="user-list">
        <template v-for="item in data">
            <div class="user" :class="{ small: !displayUserName }"
                 v-if="item['all_sum_amount'] >= min && item['all_sum_amount'] < max">
                <img class="avatar" :src="item.user.avatar" :alt="item.user.name">
                <div class="user-name" v-if="displayUserName">
                    <span class="name">{{ item.user.name }}</span>
                    <span class="amount">￥{{ item.all_sum_amount }}</span>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'specialThanks',
    props: {
        displayUserName: Boolean,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: Infinity
        }
    },
    methods: {
        get_sponsors: function () {
            axios.get('https://server.amiyabot.com:8020/get_sponsors').then(res => {
                this.data = JSON.parse(res.data)
                this.data.sort((a, b) => {
                    return b.all_sum_amount - a.all_sum_amount
                })
            })
        }
    },
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.get_sponsors()
    }
}
</script>

<style scoped>
.user-list {
    display: flex;
    flex-wrap: wrap;
}

.user {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.user:not(.small) {
    width: 25%;
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

.amount {
    font-size: 12px;
    font-weight: bold;
    color: #ff9800;
}
</style>
