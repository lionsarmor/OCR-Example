<template>
  <div>
    <DashboardHeader />
    <PaymentsChart />
  </div>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue'
import PaymentsChart from '@/components/Charts/PaymentsChart.vue'

export default {
  components: {
    DashboardHeader,
    PaymentsChart
  }
}
</script>
