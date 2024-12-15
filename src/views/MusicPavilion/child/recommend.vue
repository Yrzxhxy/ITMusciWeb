<script setup lang="ts">
import { onMounted } from 'vue'
    /**
     * 任务总线
     */
    onMounted(() => {
        // 获取数据网络资源
        console.log("获取数据资源")
        // 先获取缓存，如果没有再请求
        
    })
    /**
    * 资源 ：每日推荐
    */


    /**
    * 资源 ：精彩MV
    */
</script>
<template>
    <div class="recommend">
        <div class="title-xl">
            <h2>每日推荐</h2>
        </div>
        <div class="swiperScroll">
            <el-carousel :interval="4000" type="card" height="400px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 text="2xl" justify="center">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <el-divider />
        <div class="title-xl">
            <h2>精彩MV</h2>
        </div>
        <div class="swiperScroll">
            <el-carousel indicator-position="outside" :interval="6000">
                <el-carousel-item v-for="item in 4" :key="item">
                    <div class="itemContainer">
                        <div v-for="(itemMsg, indexMsg) in 8" :key="indexMsg">
                            <div class="itemMsg hoverdaily">{{ itemMsg }}</div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<style scoped>
.recommend {
    height: 100%;
    width: 100%;
    /* background-color: azure; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.swiperScroll {
    height: 400px;
    width: 90%;
}

.itemContainer {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 横轴平铺四个 */
    gap: 20px;
    /* 控制X轴和Y轴上的间距 */
    justify-items: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}

.itemMsg {
    background-color: bisque;
    height: 130px;
    width: 300px;
}

.hoverdaily {
    position: relative;
}

.hoverdaily:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../../assets/icon/music/start.png');
    background-size: 120px 120px;
    /* 根据需要调整背景大小 */
    background-position: center;
    /* 根据需要调整背景位置 */
    background-repeat: no-repeat;
    opacity: 0.4;
    /* 根据需要调整透明度 */
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>