<script setup>
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'
const workplace=ref()
onMounted(()=>{
const myChart = echarts.init(workplace.value);
myChart.setOption({
  title: {
    text: '就业去向'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 20,
          name: '继续深造'
        },
        {
          value: 60,
          name: '国企央企或公务员'
        },
        {
          value: 15,
          name: '互联网企业'
        },
        {
          value: 5,
          name: '其他私企'
        }
      ]
    }
  ]
});
})
</script>

<template>
    <div ref="workplace" style="width: 900px;height:600px;"></div>
</template>

<style  scoped>
</style>