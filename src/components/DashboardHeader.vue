<template>
  <header class="bg-blue-600 text-white p-4 flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <img src="@/assets/images/logo.png" alt="Logo" class="h-10 w-10" />
      <h1 class="text-xl font-semibold">Example Dash</h1>
    </div>

    <nav class="flex space-x-4">
      <RouterLink to="/" class="hover:font-bold">Dashboard</RouterLink>
      <RouterLink to="/claims" class="hover:font-bold">Claims</RouterLink>
      <RouterLink to="/payments" class="hover:font-bold">Payments</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'DashboardHeader'
}
</script>

<style scoped>
/* Add any additional styling here */
</style>
