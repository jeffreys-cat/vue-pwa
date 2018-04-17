<template>
    <div class="home">
        <ul class="links">
            <li v-for="(link, index) in links" :key="index" @click="goLink(link)">{{link.name}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
interface Link {
    name: string;
    to: string;
}

@Component
export default class Home extends Vue {
    name = 'hello';
    links: Array<Link> = [
        {
            name: 'Hello',
            to: 'hello'
        },
        {
            name: 'About',
            to: 'about'
        }
    ];
    goLink(link: Link) {
        this.$router.push(link.to);
    }
};
</script>

<style lang="scss" scoped>
    .home {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        // background-color: #4DBA87;
    }
    .links {
        li:hover {
            cursor: pointer;
        }
    }
</style>

