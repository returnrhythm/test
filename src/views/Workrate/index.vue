
<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'
const workrate=ref()
onMounted(()=>{
const myChart = echarts.init(workrate.value);
myChart.setOption({
  title: {
    text: '就业率(%)'
  },
  xAxis: {
    data: ['2019毕业生', '2020毕业生', '2021毕业生', '2022毕业生', '2023毕业生']
  },
  yAxis: {},
  series: [
    {
      data: [90, 91, 92, 93, 94],
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