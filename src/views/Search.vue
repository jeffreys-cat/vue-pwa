<template>
    <div class="search">
        <section class="search-section">
            <input placeholder="输入" />
        </section>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class Search extends Vue {
        name = 'search';
    };

</script>

<style lang="scss" scoped>
    .search {
        .search-section {
            margin-top: 20px;
            width: 632px;
            input {
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: 4px 8px;
            }
        }
    }
</style>
