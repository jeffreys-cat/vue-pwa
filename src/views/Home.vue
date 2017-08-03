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
                    name: 'Hello',
                    to: 'hello'
                },
                {
                    name: 'About',
                    to: 'about'
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

