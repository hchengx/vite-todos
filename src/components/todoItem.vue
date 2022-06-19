<template>
    <div class="list-item editingClass editing">
        <!-- 最外层容器-->
        <label class="checkbox">
            <!--自定义的多选框-->
            <input type="checkbox" v-model="item.checked">
            <!--item.checked-->
            <span class="checkbox-custom"></span>
        </label>
        <input type="text" v-model="item.text" placeholder='写点什么。。。'>
        <!--绑定item.text-->
        <a class="delete-item">
            <!--删除图标-->
            <span class="icon-trash"></span>
        </a>
    </div>
</template>
<script setup lang="ts">
import {defineProps} from "vue"
interface item_arr {
    checked: boolean,
    text: string,
    isDeleted: boolean
}
const props = defineProps<{
    item: item_arr
}>()
</script>
<style lang="less">
@import '../assets/style/list-items.less';
</style>
