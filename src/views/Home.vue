<template>
    <div>
        <ul class="links">
            <li v-for="(link, index) in links" :key="index" @click="goLink(link)">{{link.name}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            links: [
                {
                    name: 'About',
                    to: 'about'
                },
                {
                    name: 'Hello',
                    to: 'hello'
                }
            ]
        };
    },
    methods: {
        goLink(link) {
            this.$router.push(link.to);
        }
    }
};
</script>

<style lang="scss" scoped>
    .links {
        li:hover {
            cursor: pointer;
        }
    }
</style>

