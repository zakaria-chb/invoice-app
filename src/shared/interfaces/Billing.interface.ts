import type { ComputedRef } from "vue";

export interface BillingInterface {
    id: string,
    billerInfo: {
        billerName: string,
        billerStreetAdress: string,
        billerCity: string,
        billerZipCode: string | undefined,
        billerCountry: string
    },
    clientInfo: {
        clientName: string,
        clientStreetAdress: string,
        clientCity: string,
        clientZipCode: string | undefined,
        clientCountry: string,
        clientEmail: string
    },
    invoiceInfo: {
        invoiceDate: string,
        paymentMethod: string
        invoiceDescription: string,
    },
    itemInfo: {
        itemName: string,
        qty: string | undefined,
        price: string | undefined,
    }[]
}


export interface ItemInterface {
    itemName: string,
    qty: number,
    price: number,
    total: number
}