<template>
    <div class="hello">
        <h4>Here is {{pageName}} page!</h4>
        <section>
            <!-- <van-button size="large" type="default" @click="decrement()">-</van-button> -->
            <button @click="decrement()">-</button>
                <span class="counter">{{counter}}</span>
            <button @click="increment()">+</button>
            <!-- <van-button size="large" type="default" @click="increment()">+</van-button> -->
        </section>
    </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
// Button
// import Button from 'vant';
// import 'vant/lib/vant-css/base.css';
// import 'vant/lib/vant-css/button.css';
// Vue.use(Button);

@Component
export default class Hello extends Vue {
    pageName = 'Hello';
    counter = 0;

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
