<template>
    <div class="list-todos">
        <a @click="goList(item.id)" class="list-todo list activeListClass" v-for="item in items">
            <span class="icon-lock" v-if="item.locked"></span> <!-- v-if 条件渲染-->
            <span class="count-list" v-if="item.count > 0">{{item.count}}</span>
            {{item.title}}
        </a>
        <a class=" link-list-new" @click="addTodoList">
            <span class="icon-plus">
            </span>
            新增
        </a>
    </div>
</template>
<script setup lang="ts">
import {getTodoList, addTodo} from "../api/api"
interface sample_arr {
    id: string,
    title: string;
    count: number;
    locked: boolean;
}
let todoId: string = '';
let items: sample_arr[] = []
function goList(id: string) {
    todoId = id;
}

function addTodoList() {
    addTodo({}).then(data => {
        getTodoList().then(res => {
            const TODOS = res.data.todos;
            todoId = TODOS[TODOS.length - 1].id;
            items = TODOS;
        })
    })
}
// TODO:created function
</script>
<style lang="less">
@import '../assets/style/menu.less';
</style>