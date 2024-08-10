<template>
  <div>
    <!-- Your table structure goes here -->
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2">Claim ID</th>
          <th class="py-2">Status</th>
          <th class="py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="claim in claims" :key="claim.id">
          <td>{{ claim.id }}</td>
          <td>{{ claim.status }}</td>
          <td>{{ claim.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      claims: [
        { id: 'C12345', status: 'Processed', amount: '$1000' },
        { id: 'C12346', status: 'Pending', amount: '$500' }
        // More claims data
      ]
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
