// src/stores/claimsStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useClaimsStore = defineStore('claims', {
  state: () => ({
    claims: [],
    payments: []
  }),
  actions: {
    async fetchClaims() {
      const response = await axios.get('https://api.example.com/claims')
      this.claims = response.data
    },
    async fetchPayments() {
      const response = await axios.get('https://api.example.com/payments')
      this.payments = response.data
    }
  }
})
