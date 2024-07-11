<template>
    <div class="min-h-screen flex flex-col justify-center">
        <div class="flex justify-between items-center mb-10
                    max-sm:flex-col">
            <div>
                <h1 class="text-5xl font-bold
                            max-lg:text-4xl
                            max-md:text-3xl
                            max-sm:text-3xl">
                    MES DOCUMENTS
                </h1>
                <p class="mt-1 max-md:text-sm">Nombre de facture(s) {{ billingStore.filteredBillList.length }} 🧾</p>
            </div>
            
            <div class="flex items-center justify-center max-sm:mt-6">
                <SearchBar />
                <AddInvoiceButton class="mybtn" />
            </div>
        </div>

        <div
            class="min-h-[400px] max-h-[400px] rounded-3xl overflow-auto 
                    2xl:max-h-[800px] 2xl:min-h-[800px]">

            
            <Invoice v-for="invoices in billingStore.filteredBillList" :key="invoices.id"
                :invoice="invoices"
            />
        </div>

        <Transition>
            <div v-if="billingStore.successMessage" class="text-center toast" >
                <i class="fa-solid fa-check fa-beat "></i>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import AddInvoiceButton from '@/components/homepage_components/AddInvoiceButton.vue';
import Invoice from '@/components/homepage_components/Invoice.vue';
import SearchBar from '@/components/homepage_components/SearchBar.vue';
import { useBillingStore } from '@/stores/billing';
import { onUnmounted } from 'vue';

const billingStore = useBillingStore()

onUnmounted(() => {
    billingStore.resetSearchQuery()
})


</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}
</style>