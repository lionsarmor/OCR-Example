<template>
  <div ref="chart"></div>
</template>

<script>
import * as d3 from 'd3'

export default {
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const svg = d3
        .select(this.$refs.chart)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '400')
      // Example chart code here
    }
  }
}
</script>
