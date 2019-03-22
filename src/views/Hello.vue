<template>
    <div class="hello">
        <h4>Here is {{pageName}} page!</h4>
        <section>
            <button @click="decrement()">-</button>
                <span class="counter">{{counter}}</span>
            <button @click="increment()">+</button>
        </section>
        <swiper ref="mySwiper">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
        <!-- <ul>
            <li v-for="img in list">
                <img v-lazy="img.src" >
            </li>
        </ul> -->
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component
export default class Hello extends Vue {
    pageName = 'Hello';
    counter = 0;
    swiperOption = {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
    }
    list = [
        {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546490622326&di=12ecb6b573faad0454ffa11d41759bf4&imgtype=0&src=http%3A%2F%2Fpic44.photophoto.cn%2F20170719%2F0012024451690249_b.jpg'
        }
    ]
    // @Prop() message: string = '';

    get mapGetters() {
        return {
            ...mapGetters([
                'getCounter'
            ])
        }
    }
    created() {
        this.getCounterFromStore();
    }
    mounted() {
    }

    increment() {
        this.$store.dispatch('increment');
        this.getCounterFromStore();
    };

    decrement() {
        this.$store.dispatch('decrement');
        this.getCounterFromStore();
    };

    getCounterFromStore() {
        this.counter = this.$store.getters.getCounter;
    }
};
</script>

<style scoped lang="scss">
    .hello {
        section {
            display: flex;
            justify-content: space-between;
            width: 50%;
            margin: 0 auto;
        }
        .counter {
            padding: 0 20px;
        }
        .hello-button {
            display: block;
            width: 150px;
            margin: 0 auto;
            cursor: pointer;
            user-select: none;
            text-align: center;
            background: #42A5F5;
            color: white;
            border-radius: 2px;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
            line-height: 40px;
            font-size: 1.4rem;
        }
    }
</style>
