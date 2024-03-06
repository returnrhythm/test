<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'
const gpa=ref()
onMounted(()=>{
    const myChart = echarts.init(gpa.value);
myChart.setOption({
  title: {
    text: '绩点分析'
  },
  tooltip: {},
  xAxis: {
    data: ['高等数学', '操作系统', '计算机网络', '数据库', 'java', '数据结构']
  },
  yAxis: {},
  series: [
    {
      name: '分数',
      type: 'bar',
      data: [60, 70, 50, 70, 90, 80]
    }
  ]
});
})
</script>

<template>
    <div ref="gpa" style="width: 900px;height:600px;"></div>
</template>

<style  scoped>
</style>