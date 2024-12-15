<script setup lang="ts">
/**
 * 头部组件
 */

import { ref, onMounted } from 'vue'

// 任务总线
onMounted(() => {
    // 是否登录
    if (!userisLogin()) {
        // 提示用户尽快登录
        console.log("用户暂未登录")
        // setTimeout(()=>{
        //     // 提示用户尽快登录
        //     loginForm.value=!loginForm.value
        // },5000)
    }

    //  更新用户头像及信息

})

// 默认头像（未登录）
const DEFAULT_AVATAR = "/src/assets/image/user/DefaultAvatar.png"
let avatar = ref(DEFAULT_AVATAR)

// 检查用户是否登录 （storage留存Token）
import { getToken } from '../utils/token/token'
function userisLogin(): boolean {
    return getToken() != ''
}


/**
 * 
 * 用户登录
 */
import LoginCom from '../components/Login.vue'
 const loginForm=ref(false)
 const login =()=>{
    console.log("用户登录")
    loginForm.value=!loginForm.value
 }
 const loginsuccess=()=>{
    console.log("登录已成功")
    loginForm.value=!loginForm.value
 }

/**
 * 退出登录
 * 
 */
// 退出登录弹窗
let logoutDialog = ref(false)
const logout = () => {
    // 清楚缓存
    localStorage.clear()
    // 还原默认头像
    avatar.value = DEFAULT_AVATAR
    logoutDialog.value = !logoutDialog.value
}



// element Menu
const activeIndex = ref('/')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    activeIndex.value = key
}
const disable = false

// element Input
import { Search } from '@element-plus/icons-vue'
const input = ref('')

</script>
<template>
    <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect" background-color="#000" text-color="#fff" active-text-color="#7FFFD4">
        <el-menu-item :disabled="disable">
            <!-- <img style="width: 100px"
                src="https://tse4-mm.cn.bing.net/th/id/OIP-C.OGxY_1Y8YjiUtSTJ9IW_WQHaCx?rs=1&pid=ImgDetMain"
                alt="Vite logo" /> -->
        </el-menu-item>
        <el-menu-item index="/">音乐馆</el-menu-item>
        <el-menu-item index="/personalPlay">我的歌单</el-menu-item>
        <el-menu-item :disabled="disable">
            <template #default>
                <el-input v-model="input" style="width: 240px" placeholder="请输入您想搜索的歌曲" clearable>
                    <template #suffix>
                        <el-icon class="el-input__icon">
                            <search />
                        </el-icon>
                    </template>
                </el-input>
            </template>
        </el-menu-item>
        <el-sub-menu index="4">
            <template #title>
                <img style="width: 50px ;border-radius: 25px; " :src="avatar" />
            </template>
            <div v-if="!userisLogin">
                <el-menu-item>修改信息</el-menu-item>
                <el-menu-item>切换账户</el-menu-item>
                <el-menu-item @click="logoutDialog = true">退出登录</el-menu-item>
            </div>
            <div v-else>
                <el-menu-item @click="login">登录</el-menu-item>
            </div>
        </el-sub-menu>
    </el-menu>
    <el-dialog v-model="logoutDialog" title="退出登录" width="500" center>
        <span>
            这会退出您的账号，之后的记录将不会进行留存，请确认!!!
        </span>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="logoutDialog = false">取消</el-button>
                <el-button type="danger" @click="logout">
                    确定
                </el-button>
                </div>
        </template>
    </el-dialog>
    <el-dialog v-model="loginForm"  width="800">
        <LoginCom @success="loginsuccess"/>
    </el-dialog>
</template>
<style scoped>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}
</style>