<script setup>

</script>

<template>
    <el-main>
  <!-- 轮播图 -->
  <!-- <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="350px">
      <el-carousel-item v-for="item in 3" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div> -->
  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" height="500px">
      <el-carousel-item>
        <img src="../../assets/photo/1.png" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/photo/2.png" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/photo/3.png" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- 信息展示 -->
  <el-row :gutter="30">
      <el-col :span="8">
          <div class="grid-content ep-bg-purple" >
              <el-card shadow="hover" body-style="height:150px"> 展示信息1 </el-card>
          </div>
      </el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple-light"  >
          <el-card shadow="hover" body-style="height:150px"> 展示信息2 </el-card>
      </div>
      </el-col>
      <el-col :span="8">
          <div class="grid-content ep-bg-purple" >
              <el-card shadow="hover" body-style="height:150px"> 展示信息3 </el-card>
          </div>
      </el-col>
  </el-row>
</el-main>
</template>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */

.el-row{
    margin-top: 50px;
    margin-bottom: 50px;
    height: 250px;
}
.block{
    margin: auto;
    width: 90%;
}
</style>