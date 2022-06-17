<template>
    <section class="container">
        <section class="menu">
            <todoMenu></todoMenu>
        </section>
        <section class="content-container">
        <TodoItem></TodoItem>
        </section>
    </section>
</template>

<script setup lang="ts">
import todoMenu from './todoMenu.vue';
import TodoItem from './todoItem.vue';
</script>

<style lang="less">
@import '../assets/style/layouts.less';
</style>