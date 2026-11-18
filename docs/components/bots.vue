<template>
    <div class="bots">
        <div class="bot-list">
            <a class="bot"
               href="https://bot.q.qq.com/s/ucliA4gyhq">
                <span class="bot-name">AmiyaBot</span>
                <img src="/AmiyaBot.png" alt="AmiyaBot 机器人分享二维码">
            </a>
            <a class="bot"
               href="https://bot.q.qq.com/s/wC1G0ozi1i">
                <span class="bot-name">AmiyaBot-Stellar</span>
                <img src="/AmiyaBot-Stellar.png" alt="AmiyaBot-Stellar 机器人分享二维码">
            </a>
        </div>
        <div class="bot-notice">
            <p>
                <strong>AmiyaBot-Stellar</strong> 处于早期开发阶段，不一定能提供 24 小时服务，且随时可能会重置数据。
            </p>
            <p>
                在手机版 QQ 中，点击 AmiyaBot-Stellar 的机器人头像，在右上角的「设置」中，把「机器人可获取的群聊消息范围」设为「获取群内全部消息」，
                并打开「机器人主动在群聊内发言」，即可为机器人开放<strong>获取所有群聊消息</strong>和<strong>主动消息</strong>，AmiyaBot-Stellar
                也就能在不 @ 的情况下参与群聊聊天。
            </p>
            <img class="bot-notice-image"
                 src="/AmiyaBot-Stellar-settings.png"
                 alt="手机 QQ 群机器人设置：机器人可获取的群聊消息范围、机器人主动在群聊内发言、设为管理员">
            <span class="bot-notice-caption">手机版 QQ 中的群机器人设置</span>
        </div>
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
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 32px;
}

.bot-list {
    flex: none;
    display: flex;
    gap: 24px;
}

.bot {
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.bot-name {
    color: #b74ec9;
    font-size: 18px;
}

.bot img {
    width: 100%;
}

.bot-notice {
    flex: 1 1 340px;
    min-width: 0;
    padding: 14px 18px;
    border-left: 3px solid #e6a23c;
    border-radius: 4px;
    background: rgb(230 162 60 / 8%);
    font-size: 14px;
    line-height: 1.7;
}

.bot-notice p {
    margin: 0;
}

.bot-notice p + p {
    margin-top: 8px;
}

.bot-notice strong {
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.bot-notice-image {
    display: block;
    width: 100%;
    max-width: 460px;
    margin-top: 12px;
}

.bot-notice-caption {
    display: block;
    margin-top: 6px;
    font-size: 13px;
    color: var(--vp-c-text-3, #999);
}

@media screen and (max-width: 768px) {
    .bots {
        gap: 20px;
    }

    .bot-list {
        gap: 16px;
    }

    .bot {
        width: 100%;
        max-width: 280px;
    }

    .bot-name {
        font-size: 16px;
    }
}
</style>
