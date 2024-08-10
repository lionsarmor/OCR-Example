<template>
  <div>
    <h1>Claims Overview</h1>
    <!-- Insert your claims table or other content here -->
    <ClaimsTable />
  </div>
</template>

<script>
import ClaimsTable from '@/components/ClaimsTable.vue'

export default {
  components: {
    ClaimsTable
  }
}
</script>

<style scoped>
/* Add your styles here */
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
