<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'
const gpa=ref()
onMounted(()=>{
    const myChart = echarts.init(gpa.value);
myChart.setOption({
  title: {
    text: '西南石油大学生师比，参考《中国教育监测与评价统计指标体系（2020年版）》'
  },
  tooltip: {},
  xAxis: {
    data: ['成都校区','南充校区']
  },
  yAxis: {
  },
  series: [
    {
      name: '生师比',
      type: 'bar',
      data: [13.507,54.161],
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