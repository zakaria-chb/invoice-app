<template>
    <div class="mr-10 text-[#ECEFF1]">
        <input class="px-2 py-2 rounded-xl" type="text" v-model="searchQuery" @input="emitSearch" placeholder="Rechercher..." />
    </div>
</template>

<script setup lang="ts">
import { useBillingStore } from '@/stores/billing';
import { ref } from 'vue';

const billingStore = useBillingStore()
const searchQuery = ref('');

function emitSearch() {
  billingStore.setSearchQuery(searchQuery.value);
}






</script>

<style scoped>
input, textarea, select {

  background-color: var(--bg-color2);
  padding: 8px 15px;
  color: var(--text-color);

}
input:focus-within {

  outline-color: var(--text-color);
}

</style>
