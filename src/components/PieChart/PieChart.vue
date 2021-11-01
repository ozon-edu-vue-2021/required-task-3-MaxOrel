<template>

</template>

<script>
import { Doughnut as PieChart, mixins } from"vue-chartjs";
const { reactiveProp } = mixins
console.log(reactiveProp)


export default {
  extends: PieChart,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<style scoped>

</style>