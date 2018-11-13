<template>
    <div class="hello">
        <h4>Here is {{pageName}} page!</h4>
        <section>
            <button @click="decrement()">-</button>
                <span class="counter">{{counter}}</span>
            <button @click="increment()">+</button>
        </section>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component
export default class Hello extends Vue {
    pageName = 'Hello';
    counter = 0;
    @Prop() message: string = 'world';

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
