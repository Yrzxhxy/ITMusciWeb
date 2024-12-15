<script setup lang="ts">
import {RouterLink,RouterView} from 'vue-router'
/**
 * 音乐馆
 */
</script>
<template>
    <div class="choose-Menu">
    <RouterLink to="recommend" class="choose-item ">首页</RouterLink>
    <RouterLink to="singer" class="choose-item">歌手</RouterLink>
    <RouterLink to="songlist" class="choose-item">歌单</RouterLink>
    </div>
    <RouterView/>
</template>
<style scoped>
    .choose-Menu{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 90px;
    }
    .choose-item{
        width: 70px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: large;
        text-decoration: none;
        border-radius: 15px;
        color: black;
    }
    .choose-item:hover,.router-link-exact-active{
        color: aquamarine;
        background-color: rgb(0, 0, 0);
       
    }
</style>