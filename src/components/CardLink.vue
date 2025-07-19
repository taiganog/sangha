<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { reactive, computed } from 'vue'

    const props = defineProps<{
        url_img: string
        url_redirect: string
        titulo: string
    }>();
    

    const getFundoCard = computed((): string => {
        return "background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + props.url_img + ");"
    });
</script>

<template>
    <RouterLink :to="url_redirect" class="card-container" :style="getFundoCard">
        <!-- <div class="opacity-mask"></div> -->
        <div class="card-descricao">
            <strong style="font-weight: 600"><slot></slot></strong>
        </div>

        <h3 class="card-titulo">{{ titulo }}</h3>
    </RouterLink>
</template>

<style scoped>

    .card-titulo {
        font-family: 'Gagalin';
        font-size: 3.5rem;
        text-shadow: -3px -3px 0 darkblue, 3px -3px 0 darkblue, -3px 3px 0 darkblue, 3px 3px 0 darkblue;
    }

    .card-descricao {
        padding-bottom: 2rem;   
    }

    .card-descricao, .card-titulo {
        opacity: 1 !important;
        z-index: 1;
        padding-left: 2rem;
    }

    .card-container {
        text-decoration: inherit;
        border-radius: 2rem;
        background-size: cover;
        display: flex;
        flex-direction: column-reverse;
        min-height: 30vh;
        font-weight: bold;
        width: 100%;
        height: 100%;
        color: white;
        cursor: pointer;
        transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    }

    .card-container:hover {
        transform: translate(10px, -10px);
        box-shadow: -10px 10px 0px darkblue;
    }
</style>