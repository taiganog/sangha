<script setup lang="ts">
    import CardLink from '@/components/CardLink.vue';
    import { computed, onUnmounted, onMounted, ref } from 'vue';

        const screenWidth = ref(window.innerWidth);

        const is_mobile = computed ((): boolean => {
            return screenWidth.value > 1000;
        });

        const updateWidth = () => {
            screenWidth.value = window.innerWidth;
        };

        onMounted(() => {
            window.addEventListener('resize', updateWidth); 
        });

        onUnmounted(() => {
            window.removeEventListener('resize', updateWidth); 
        });
</script>


<template>
    <div class="container">
        <div class="main-card">

            <div class="video-container">
                <div class="overlay-gradiente"></div>
                <div class="bg">
                    <video class="main-card-video" v-if="is_mobile" autoplay loop muted disablepictureinpicture >
                        <source src="/videos/video-bg.mp4">
                    </video>
                </div>
            </div>
            <div class="card-text">
                <h2 class="title poppins-black" style="margin-bottom: 1rem;">Quando a <strong>criatividade</strong> encontra a <strong>disposição</strong></h2>
                <span >surgem encontros que transformam a rua em palco e amizades em espetáculos</span>
            </div>
        </div>

        <div class="card">
            <CardLink :url_img="'/img/bora_praticar.png'" :url_redirect="'/bora_praticar'" :titulo="'BORA PRATICAR'" >
                Confira Imagens e Vídeos dos últimos encontros!
            </CardLink>
        </div>

        <div class="card">
            <CardLink :url_img="'/img/tutoriais.png'" :url_redirect="'/tutoriais'" :titulo="'TUTORIAIS'" >
                Aprenda com nossos professores!
            </CardLink>
        </div>

        <div class="card">
            <CardLink :url_img="'/img/equipamento.png'" :url_redirect="'/bazar'" :titulo="'NOSSO BAZAR'" >
                Conheça as mentes por trás do projeto!
            </CardLink> 
        </div>
    </div>
</template>

<style scoped>

    .container {
        display: grid;
        gap: 10px;
    }

    .main-card {
        color: darkblue;
        margin: auto;
        
    }
    
    .card-text {
        margin: auto;
    }

    .title {
        text-align: center;
    }

    .bg {
        margin: auto;
    }

    h2 {
        font-size: 1.7rem;
        font-weight: normal;
    }

    strong {
        font-weight: bold !important;
    }
    
    @media(min-width: 1024px) {

        h2 {
            font-size: 4rem;
            line-height: 4rem;
        }

        .main-card {
            display: flex;
        }

        .main-card-video {
            object-fit: none; 
            max-height: 70vh;
        }

        .overlay-gradiente {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(247, 235, 221, 1) 95%);
        }

        .video-container {
            position: relative;
            border-radius: 2rem 0px 0px 2rem; 
            width:100%;
            max-height: 55vh;
            overflow: hidden;
            
        }

        .title {
            text-align: left;
            letter-spacing: -3px;
        }

        .container {
            grid-template-columns: repeat(3, 33%);
            gap: 1rem;
        }

        .card {
            grid-row: 2;
        }

        .card-text {
            font-size: 30px;
            line-height: 2rem;
        }
    }

</style>    