<template>
    <div class="hello">
        <h4>Here is {{pageName}} page!</h4>
        <section>
            <button class="hello-button" @click="decrement()">-</button>
                <span>{{counter}}</span>
            <button class="hello-button" @click="increment()">+</button>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            pageName: 'Hello',
            counter: 0
        };
    },
    computed: {
        ...mapGetters([
            'getCounter'
        ])
    },
    created() {
        this.getCounterFromStore();
        console.log(process.env);
    },
    mounted() {
    },
    methods: {
        increment() {
            this.$store.dispatch('increment');
            this.getCounterFromStore();
        },
        decrement() {
            this.$store.dispatch('decrement');
            this.getCounterFromStore();
        },
        getCounterFromStore() {
            this.counter = this.$store.getters.getCounter;
        }

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello {
        section {
            display: flex;
            justify-content: space-between;
            width: 50%;
            margin: 0 auto;
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
