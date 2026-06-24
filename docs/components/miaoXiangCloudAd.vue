<template>
    <a class="ad-card" href="https://cloud.someo.top" target="_blank" rel="noopener noreferrer">
        <div class="logo-wrap">
            <img
                class="logo"
                src="https://cloud.someo.top/upload/nq-static/images/20260603/6a20491192619.png"
                alt="妙想云"
            >
        </div>
        <div class="content">
            <div class="name">妙想云 - 新一代云计算平台</div>
            <div class="slogan">稳定实惠，一键上云</div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'miaoXiangCloudAd'
}
</script>

<style scoped>
.ad-card {
    display: flex;
    align-items: center;
    gap: 24px;
    margin: 32px 0;
    padding: 24px 28px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    text-decoration: none !important;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.ad-card:hover {
    border-color: var(--vp-c-brand);
    box-shadow: 0 2px 12px rgb(183 78 201 / 15%);
}

.ad-card:hover .logo-wrap {
    box-shadow: 0 4px 16px rgb(183 78 201 / 25%);
}

.logo-wrap {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 96px;
    padding: 12px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
    transition: box-shadow 0.2s;
}

.logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.content {
    min-width: 0;
}

.name {
    font-size: 16px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    line-height: 1.4;
}

.slogan {
    margin-top: 4px;
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.4;
}

@media screen and (max-width: 640px) {
    .ad-card {
        padding: 16px;
        gap: 16px;
    }

    .logo-wrap {
        width: 72px;
        height: 72px;
        padding: 8px;
    }

    .name {
        font-size: 15px;
    }
}
</style>
