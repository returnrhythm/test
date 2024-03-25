<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'
const workrate=ref()
onMounted(()=>{
const myChart = echarts.init(workrate.value);
myChart.setOption({
  title: {
    text: '综测趋势'
  },
  xAxis: {
    data: ['2022秋季学期','2023春季学期','2023秋季学期']
  },
  yAxis: {
    max:100,
    min:0
  },
  series: [
    {
      data: [80,75,77],
      type: 'line',
      label: {
        show: true,
        position: 'bottom',
        textStyle: {
          fontSize: 20
        }
      }
    }
  ]
});
})
</script>

<template>
    <div ref="workrate" style="width: 900px;height:600px;"></div>
</template>

<style  scoped>
</style>