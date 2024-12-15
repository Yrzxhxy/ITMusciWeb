<script setup lang="ts">
    import {defineEmits} from 'vue'
    const emit =defineEmits(['success'])
    const login=()=>{
        emit('success')
    }
</script>
<template>
    <cusButton text="登录" bgColor="red" borderColor="black"  @click="login"></cusButton>
</template>
<style scoped>
</style>