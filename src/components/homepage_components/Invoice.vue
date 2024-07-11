<template>
  <RouterLink :to="{ name: 'informations-facture', params: { id: invoice.id } }">
    <div class="flex items-center justify-between bg-[#455A64] p-5 5 my-5 rounded-xl border-style
            max-sm:text-xs">
      <p class="text-[#ECEFF1] w-1/5">{{ invoice.clientInfo.clientName }}</p>
      <p class="text-[#ECEFF1] w-1/5">{{ formatDateToFrench(invoice.invoiceInfo.invoiceDate) }}</p>
      <p class="text-[#ECEFF1] w-1/5">{{ invoice.invoiceInfo.invoiceDescription }}</p>
      <p class="text-[#ECEFF1] w-1/5 ">{{ calculateTotalForAllItems }} €</p>

      <div>
        <i class="fa-solid fa-arrow-right text-[#ECEFF1] w-1/5"></i>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { BillingInterface } from '@/shared/interfaces/Billing.interface';
import { formatDateToFrench, useBillingStore } from '@/stores/billing';
import { computed, ref } from 'vue';

const props = defineProps<{
  invoice: BillingInterface;
}>();


const calculateTotalForItem = (item: any) => {
  const qty = item.qty || 0;
  const price = item.price || 0;
  return qty * price;
}

const itemTotals = ref(props.invoice.itemInfo.map((item: any) => calculateTotalForItem(item)));

const calculateTotalForAllItems = computed(() => {
  return props.invoice.itemInfo.reduce((total, item) => {
    return total + calculateTotalForItem(item);
  }, 0);
});

</script>

<style scoped>
.border-style {
  transition: border 0.1s ease-in-out, transform 0.2s ease-in-out;
}

.border-style:hover {
  border: 2px solid #ECEFF1;
  transform: scale(.98);
}
</style>