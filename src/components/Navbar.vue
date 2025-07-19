<script lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="nav-container">
        <img src="/logos/logo-sangha.jpeg" height="100vh" alt="Logo">

        <div class="nav-menu">
            <RouterLink class="link btn-outline-secondary" to="/">INÍCIO</RouterLink>
            <RouterLink class="link btn-outline-secondary" to="/saiba-mais">SAIBA MAIS</RouterLink>
            <RouterLink class="link btn-outline-secondary" to="/bazar">BAZAR</RouterLink>
            <RouterLink class="link btn-outline-secondary" to="/agenda">AGENDA</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .nav-container {
        text-align: center;
        background-color: #f7ebdd;
    }

    .nav-menu {
        display: flex;
        gap: 10px;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    .link {
        text-decoration: inherit;
        text-align: center;
        font-weight: 500;
        padding: 10px;
        margin: auto;
        min-width: 100px;
        border-radius: 50px;
        color: darkblue;
        transition: 0.2s;
    }

    .link:hover {
        background-color: darkblue;  
        color: white;
    }

    @media (min-width: 1024px) {
        .nav-container {
            display: flex;
            justify-content: space-between;
        }

        .nav-menu {
            gap: 1rem;
            flex-direction: row;
        }
    }
</style>