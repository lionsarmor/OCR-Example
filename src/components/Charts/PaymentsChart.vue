<template>
  <v-stage :config="stageConfig">
    <v-layer>
      <v-rect
        v-for="(bar, index) in bars"
        :key="index"
        :config="bar"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      />
    </v-layer>
  </v-stage>
</template>

<script>
import { defineComponent } from 'vue'
import { Stage, Layer, Rect } from 'vue-konva'

export default defineComponent({
  components: {
    'v-stage': Stage,
    'v-layer': Layer,
    'v-rect': Rect
  },
  data() {
    return {
      stageConfig: {
        width: 800,
        height: 400
      },
      bars: [
        { x: 50, y: 100, width: 50, height: 300, fill: 'blue' },
        { x: 150, y: 150, width: 50, height: 250, fill: 'green' },
        { x: 250, y: 200, width: 50, height: 200, fill: 'red' }
        // Add more bars as needed
      ]
    }
  },
  methods: {
    handleMouseOver(e) {
      e.target.fill('orange')
      e.target.getStage().draw()
    },
    handleMouseOut(e) {
      const bar = this.bars[e.target.index]
      e.target.fill(bar.fill)
      e.target.getStage().draw()
    }
  }
})
</script>

<style scoped>
/* Add any custom styles you need */
</style>
