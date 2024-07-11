<template>
    <div class="min-h-screen flex flex-col justify-center">
        <div class="flex justify-between items-center mb-10
                    max-sm:flex-col
                    max-sm:mb-24">

            <div class="flex items-center justify-center 
                        max-sm:mt-5
                        max-sm:mb-5">
                <i @click="billingStore.editingInvoice = false" class="mybtn fa-solid fa-circle-xmark icone-back"></i>
            </div>

            <div>
                <h1 class="text-5xl font-bold text-right
                            max-lg:text-4xl
                            max-md:text-3xl
                            max-sm:text-3xl">
                    MODIFIER FACTURE
                </h1>
                <p class="mt-1 max-md:text-sm text-right">Modification de votre facture</p>
            </div>

        </div>


        <div class="min-h-[500px] max-h-[500px] rounded-3xl overflow-auto
                    2xl:max-h-[800px] 2xl:min-h-[800px]">


            <div class="flex items-center justify-center">

                <div class="flex flex-col bg-[#455A64] p-5 ml-5 mr-5 my-5 rounded-xl w-1/2
                    max-sm:text-xs
                    max-xl:w-auto
                    max-sm:m-0">

                    <FormKit type="form" id="addBillForm" submit-label="FINALISER LA FACTURE" @submit="submitHandler"
                        :actions="false" #default="{ state: { valid } }" :plugins="[zodPlugin]">
                        <div class="space-line"></div>

                        <div class="flex flex-col items-center mb-10">
                            <h1 class="text-xl font-bold mb-5 text-center">COORDONNÉES DE VOTRE SOCIÉTÉ</h1>
                            <div>
                                <FormKit name="from-name" label="Nom*" type="text" validation="required"
                                    v-model="billingForm.billerInfo.billerName" />
                            </div>
                            <div class="flex">
                                <div class="mr-10">
                                    <FormKit name="from-adress" label="Adresse*" type="text" validation="required"
                                        v-model="billingForm.billerInfo.billerStreetAdress" />
                                </div>
                                <FormKit name="from-zip-code" label="Code postal*" type="number" validation="required"
                                    v-model="billingForm.billerInfo.billerZipCode" />
                            </div>

                            <div class="flex">
                                <div class="mr-10">
                                    <FormKit name="from-city" label="Ville*" type="text" validation="required"
                                        v-model="billingForm.billerInfo.billerCity" />
                                </div>

                                <FormKit name="from-country" label="Pays*" type="text" validation="required"
                                    v-model="billingForm.billerInfo.billerCountry" />
                            </div>

                        </div>
                        <div class="space-line"></div>

                        <div class="flex flex-col items-center mb-10">
                            <h1 class="text-xl font-bold mb-5 text-center">COORDONNÉES DE VOTRE CLIENT</h1>
                            <div class="flex">
                                <div class="mr-10">
                                    <FormKit name="to-name" label="Nom*" type="text" validation="required"
                                        v-model="billingForm.clientInfo.clientName" />
                                </div>
                                <FormKit name="to-mail" label="Email*" type="email" validation="required"
                                    v-model="billingForm.clientInfo.clientEmail" />
                            </div>
                            <div class="flex">
                                <div class="mr-10">
                                    <FormKit name="to-adress" label="Adresse*" type="text" validation="required"
                                        v-model="billingForm.clientInfo.clientStreetAdress" />
                                </div>
                                <FormKit name="to-zip-code" label="Code postal*" type="number" validation="required"
                                    v-model="billingForm.clientInfo.clientZipCode" />
                            </div>

                            <div class="flex">
                                <div class="mr-10">
                                    <FormKit name="to-city" label="Ville*" type="text" validation="required"
                                        v-model="billingForm.clientInfo.clientCity" />
                                </div>

                                <FormKit name="to-country" label="Pays*" type="text" validation="required"
                                    v-model="billingForm.clientInfo.clientCountry" />
                            </div>

                        </div>
                        <div class="space-line"></div>

                        <div class="flex flex-col items-center">
                            <h1 class="text-xl font-bold mb-5 text-center">INFORMATIONS DE LA PRESTATION</h1>
                            <div class="flex">
                                <div class="mr-10">
                                    <FormKit name="invoice-date" label="Date*" type="date" validation="required"
                                        v-model="billingForm.invoiceInfo.invoiceDate" />
                                </div>
                                <FormKit name="payment-method" label="Mode de paiement*" type="select"
                                    :options="paymentMethods" placeholder="-" validation="required"
                                    v-model="billingForm.invoiceInfo.paymentMethod" />
                            </div>

                            <FormKit name="product-description" label="Description*" type="text" validation="required"
                                v-model="billingForm.invoiceInfo.invoiceDescription" />

                            <div>
                                <FormKit type="list" v-for="(item, index) in billingForm.itemInfo" :key="index">
                                    <div class="flex items-center justify-center
                                    max-sm:flex-col
                                    max-sm:mt-5">

                                        <div class="mr-10
                                        max-sm:mr-0">
                                            <FormKit name="item-name" label="Désignation*" type="text"
                                                validation="required" v-model="item.itemName" />
                                        </div>
                                        <div class="flex">
                                            <div class="mr-10">
                                                <FormKit name="qty" label="Quantité*" type="number"
                                                    validation="required" v-model="item.qty" />
                                            </div>

                                            <FormKit name="price" label="Prix*" type="number" validation="required"
                                                v-model="item.price" />
                                            <button @click.prevent="deleteItem(index)">
                                                <i class="ml-5 fa-solid fa-trash"></i>
                                            </button>
                                        </div>

                                    </div>
                                    <p class="text-right mb-1">{{ calculateTotalForItem(item) }}€</p>


                                </FormKit>
                            </div>

                            <button class="mb-8 mybtn text-2xl" @click.prevent="addProduct">
                                <i class="icone-plus bg-white rounded-full p-2 fa-solid fa-plus"></i>
                            </button>

                        </div>

                        <div class="flex justify-between items-center ≈">
                            <div class="mybtn">
                                <FormKit type="submit">
                                    MODIFIER LA FACTURE
                                </FormKit>
                            </div>

                            <p class="text-right text-white text-xl">Total: {{ calculateTotalForAllItems }}€</p>
                        </div>

                    </FormKit>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'
import { displaySuccessMessage, generateInvoiceId, useBillingStore } from '@/stores/billing';
import { computed, reactive, ref, watch, watchEffect } from 'vue';
import type { BillingInterface } from '@/shared/interfaces/Billing.interface';
import { paymentMethods } from '@/shared/data/payment.method'
import router from '@/router';

const billingStore = useBillingStore()

const props = defineProps<{
    invoice: BillingInterface
}>()

const billingForm = reactive<BillingInterface>({
    id: props.invoice.id,
    billerInfo: {
        billerName: props.invoice.billerInfo.billerName,
        billerStreetAdress: props.invoice.billerInfo.billerStreetAdress,
        billerCity: props.invoice.billerInfo.billerCity,
        billerZipCode: props.invoice.billerInfo.billerZipCode,
        billerCountry: props.invoice.billerInfo.billerCountry
    },
    clientInfo: {
        clientName: props.invoice.clientInfo.clientName,
        clientStreetAdress: props.invoice.clientInfo.clientStreetAdress,
        clientCity: props.invoice.clientInfo.clientCity,
        clientZipCode: props.invoice.clientInfo.clientZipCode,
        clientCountry: props.invoice.clientInfo.clientCountry,
        clientEmail: props.invoice.clientInfo.clientEmail
    },
    invoiceInfo: {
        invoiceDate: props.invoice.invoiceInfo.invoiceDate,
        paymentMethod: props.invoice.invoiceInfo.paymentMethod,
        invoiceDescription: props.invoice.invoiceInfo.invoiceDescription,
    },
    itemInfo: [...props.invoice.itemInfo]

})


const calculateTotalForItem = (item: any) => {
    const qty = item.qty || 0;
    const price = item.price || 0;
    return qty * price;
}

const itemTotals = ref(billingForm.itemInfo.map(item => calculateTotalForItem(item)));

watch(billingForm.itemInfo, (newItems) => {
    itemTotals.value = newItems.map(item => calculateTotalForItem(item));
}, { deep: true });


const calculateTotalForAllItems = computed(() => {
    return billingForm.itemInfo.reduce((total, item) => {
        return total + calculateTotalForItem(item);
    }, 0);
});


const addProduct = () => {
    const newProduct = {
        itemName: '',
        qty: undefined,
        price: undefined,
    };
    billingForm.itemInfo.push(newProduct);
};

const deleteItem = (i: any) => {
    billingForm.itemInfo.splice(i, 1)
}

const zodSchema = z.object({
    //   name: z.string().min(14, {
    //         message: 'La saisie est trop courte.'
    //     }).max(18, {
    //         message: 'La saisie est trop longue.'
    //     }),
})

const [zodPlugin, submitHandler] = createZodPlugin(
    zodSchema,
    (node) => {

        // Recherchez l'index de la facture existante dans la liste des factures
        const existingIndex = billingStore.bills.findIndex(
            (bill) => bill.id === billingForm.id
        );

        // Si la facture existe déjà, mettez à jour ses propriétés
        if (existingIndex !== -1) {
            billingStore.bills[existingIndex] = { ...billingForm };
            displaySuccessMessage()
        } else {
            // Sinon, ajoutez la nouvelle facture
            billingStore.addBill(billingForm);
        }

        billingStore.editingInvoice = false
        router.go(-1);

    }



    // Naviguez vers la page précédente

)

</script>

<style scoped></style>