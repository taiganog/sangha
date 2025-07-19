<script lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <hr />
    <div class="container">
        <span></span>
        <span style="margin-bottom: 30px;">
            ~by <a href="mailto:taiga.barros@gmail.com">@taiganog</a>
        </span>
    </div>
</template>

<style scoped>
    hr {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .container {
        display: flex;
        justify-content: space-between;
        min-width: 100%;
        min-height: 100%;
    }

    @media (min-width: 1024px) {

    }
</style>