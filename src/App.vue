<template>
  <div class="container 2xl:max-w-screen-2xl xl:max-w-screen-xl	lg:max-w-screen-lg	md:max-w-screen-md	sm:max-w-screen-sm">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useBillingStore } from '@/stores/billing';

const billingStore = useBillingStore()
billingStore.fetchBills()

</script>

<style scoped>

</style>