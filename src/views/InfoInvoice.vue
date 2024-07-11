<template>
  <div v-if="invoice && !billingStore.editingInvoice" class="min-h-screen max-h-screen flex flex-col justify-center">
    <div class="flex justify-between items-center mb-10
      max-sm:flex-col
      max-sm:mb-24">
      <div class="flex items-center justify-center max-sm:mt-5 max-sm:mb-5">
        <i @click="$router.go(-1)" class="mybtn fa-solid fa-circle-left icone-back"></i>
      </div>

      <div>
        <h1 class="text-5xl font-bold text-right
          max-lg:text-4xl
          max-md:text-3xl
          max-sm:text-3xl">
          INFORMATIONS FACTURE
        </h1>
        <p class="mt-1 max-md:text-sm text-right">Facture (ID: {{ invoiceId }})</p>
      </div>

    </div>

    <div class="min-h-[400px] max-h-[400px] rounded-3xl overflow-auto 
      2xl:max-h-[800px] 2xl:min-h-[800px] flex flex-col p-10">



      <div class="flex justify-between items-center mb-40
                  max-sm:flex-col
                  max-sm:mb-20
                  ">
        <div class="max-sm:text-right max-sm:mb-10">
          {{ invoice.billerInfo.billerName }} <br>
          {{ invoice.billerInfo.billerStreetAdress }}, <br>
          {{ invoice.billerInfo.billerCity }} {{ invoice.billerInfo.billerZipCode }}
        </div>

        <div>
          <h3 class="txt-color">Client:</h3>
          <p>
            {{ invoice.clientInfo.clientName }}
          </p>
          <p>
            {{ invoice.clientInfo.clientStreetAdress }},<br>
            {{ invoice.clientInfo.clientCity }} {{ invoice.clientInfo.clientZipCode }}
          </p>
          <p>
            {{ invoice.clientInfo.clientEmail }}
          </p>
        </div>
      </div>

      <div class="flex flex-col text-center mb-20">
        <div class="flex justify-between text-lg font-bold mb-5
                    max-sm:text-base">
          <div class="w-1/4">
            <p class="txt-color">Nom de l'article</p>
          </div>
          <div class="w-1/4">
            <p class="txt-color">Quantité</p>
          </div>
          <div class="w-1/4">
            <p class="txt-color">Prix unitaire</p>
          </div>
          <div class="w-1/4">
            <p class="txt-color">Total</p>
          </div>
        </div>
        <div v-for="(item, index) in invoice.itemInfo" :key="index" class="flex justify-between mb-5">
          <div class="w-1/4">
            {{ item.itemName }}
          </div>
          <div class="w-1/4">
            {{ item.qty }}
          </div>
          <div class="w-1/4">
            {{ item.price }} €
          </div>
          <div class="w-1/4">
            {{ calculateTotalForItem(item) }} €
          </div>
        </div>
      </div>


      <p><strong class="txt-color">Date de la facture:</strong> {{
        formatDateToFrench(invoice.invoiceInfo.invoiceDate) }}</p>
      <p><strong class="txt-color">Méthode de paiement:</strong> {{ invoice.invoiceInfo.paymentMethod }}</p>
      <div class="text-right">
        <div class="flex flex-col
                    max-sm:mt-10">
          <p><strong class="txt-color">Total:</strong> {{ calculateTotalForAllItems }} €</p>
        </div>
      </div>

    </div>
    <div class=" p-2 rounded-xl bg-[#455A64] flex justify-between  ">
      <button class=" text-xl mybtn txt-color bg-red-600 p-5 rounded-xl "
        @click="deleteBill(invoice.id)">SUPPRIMER</button>
      <button class=" text-xl mybtn txt-color bg-[#263238] p-5 rounded-xl "
        @click="billingStore.editingInvoice = true">MODIFIER</button>
    </div>
  </div>

  <EditInvoice :invoice="invoice" v-else-if="invoice && billingStore.editingInvoice" />

  <div class="h-screen flex flex-col justify-center items-center" v-else>
    <div class="flex items-center justify-center max-sm:mt-6">
      <i @click="$router.go(-1)" class="mybtn fa-solid fa-circle-left icone-back mb-10"></i>
    </div>
    <div class="text-9xl">🧾 NOT FOUND</div>
  </div>
</template>

<script setup lang="ts">
import EditInvoice from '@/views/EditInvoice.vue';
import { useBillingStore, formatDateToFrench } from '@/stores/billing';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const invoiceId = route.params.id;
const billingStore = useBillingStore();
const invoice = billingStore.bills.find((bill) => bill.id === invoiceId);


const deleteBill = (id: string) => {
  billingStore.deleteBill(id)
  router.go(-1)
}

const calculateTotalForItem = (item: any) => {
  const qty = item.qty || 0;
  const price = item.price || 0;
  return qty * price;
};

const calculateTotalForAllItems = computed(() => {
  return invoice?.itemInfo.reduce((total, item) => {
    return total + calculateTotalForItem(item);
  }, 0);
});


</script>