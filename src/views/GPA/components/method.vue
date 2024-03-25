<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'
const gpa=ref()
onMounted(()=>{
    const myChart = echarts.init(gpa.value);
myChart.setOption({
  title: {
    text: '教学方式平均分'
  },
  tooltip: {},
  xAxis: {
    data: ['线上教学','线下教学','线上线下混合式教学']
  },
  yAxis: {
    max:100,
    min:0
  },
  series: [
    {
      name: '分数',
      type: 'bar',
      data: [90,70,80],
      barWidth:'50%'
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