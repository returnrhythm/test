<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'
const gpa=ref()
onMounted(()=>{
    const myChart = echarts.init(gpa.value);
myChart.setOption({
  title: {
    text: '专业平均绩点'
  },
  tooltip: {},
  xAxis: {
    min:0,
    max:5
  },
  yAxis: {
    data: ['计科', '软工', '物联', '网安', '大数据'],
  },
  series: [
    {
      name: '绩点',
      type: 'bar',
      data: [3.0, 3.2, 2.9, 2.8, 3.1]
    }
  ]
});
})
</script>

<template>
    <div ref="gpa" style="width: 100%;height:600px;"></div>
</template>

<style  scoped>
</style>