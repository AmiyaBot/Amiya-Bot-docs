<template>
    <div class="user-list">
        <template v-for="item in data">
            <div class="user" :class="{ small: !displayUserName }"
                 v-if="item['all_sum_amount'] >= min && item['all_sum_amount'] < max">
                <img class="avatar" :src="item.user.avatar" :alt="item.user.name">
                <span class="userName" v-if="displayUserName">{{ item.user.name }}</span>
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
            axios.get('http://119.29.87.110:8000/get_sponsors').then(res => {
                this.data = JSON.parse(res.data)
                console.log(this.data)
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
}

.avatar {
    width: 50px;
    border-radius: 50%;
}

.small .avatar {
    width: 40px;
}

.userName {
    margin: 0 20px 0 10px;
}
</style>
