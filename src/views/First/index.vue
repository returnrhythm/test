<script setup>
import "../../assets/font/font_firstShowInformation/iconfont.js"
</script>

<template>
    <el-main>
  <!-- 轮播图 -->
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
  <!-- 文字以及登录按钮 -->
  <div class="tip">
      <div class="title">大数据教育平台——为教育助力</div>
      <div class="word">让教师省心，让学生放心</div>
      <router-link to="/person"><el-button type="primary" size="large" round="true" class="btnLogin">立即登录</el-button></router-link>
  </div>
  <!-- 信息展示 -->
  <el-row :gutter="30">
      <el-col :span="8">
          <div class="grid-content ep-bg-purple" >
              <el-card shadow="hover" body-style="height:250px">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xinxifenxi"></use>
                </svg> 
                <div class="showInformationTitle">教师</div>
                <div class="showInformationMsg">帮助教师快速分析学生各项数据，总结教学经验</div>
              </el-card>
          </div>
      </el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple-light"  >
          <el-card shadow="hover" body-style="height:250px">
            <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiejuefangan"></use>
                </svg> 
                <div class="showInformationTitle">学生</div>
                <div class="showInformationMsg">帮助学生快速查看自身各项数据，省心省力学习</div>
          </el-card>
      </div>
      </el-col>
      <el-col :span="8">
          <div class="grid-content ep-bg-purple" >
              <el-card shadow="hover" body-style="height:250px"> 
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-zhinengyun"></use>
                </svg>
                <div class="showInformationTitle">数据</div>
                <div class="showInformationMsg">数据存储在云端进行加密，永不丢失</div>
               </el-card>
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

.el-row{
    margin-top: 50px;
    margin-bottom: 50px;
    height: 250px;
}
.block{
    margin: auto;
    width: 90%;
}
.tip{
  padding-top: 50px;
}
.title{
  padding: 10px;
  color: #117e9c;
  font-size: 60px;
  font-weight: 600;
  font-family:STHeiti;
}
.word{
  padding: 10px;
  margin-bottom: 30px;
  font-size: 30px;
  font-family:STHeiti;
}
.btnLogin{
  width: 200px;
  height: 60px;
  font-size: 20px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 80px;
  margin-top:20px;
}
.showInformationTitle{
  padding-top:25px;
  font-size: 25px;
}
.showInformationMsg{
  padding-top: 20px;
  color: #9b9b9b;
}
</style>