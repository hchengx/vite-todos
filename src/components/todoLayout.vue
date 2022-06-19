<template>
    <section class="container">
        <section class="menu">
            <todoMenu></todoMenu>
        </section>
        <section class="content-container">
        <todoContent></todoContent>
        </section>
    </section>
</template>

<script setup lang="ts">
import todoMenu from './todoMenu.vue';
import todoContent from './todoContent.vue';
</script>

<style lang="less">
@import '../assets/style/layouts.less';
</style>