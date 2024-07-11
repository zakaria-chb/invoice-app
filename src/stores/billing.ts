import data from "@/shared/data/invoices";
import type { BillingInterface } from "@/shared/interfaces/Billing.interface";
import { defineStore } from "pinia";

interface BillingState {
  bills: BillingInterface[];
  billsFiltered: BillingInterface[];
  selectedInvoice: BillingInterface | null;
  isLoading: boolean;
  searchQuery: string;
  loaded: boolean;
  needRefresh: boolean;
  successMessage: boolean;
  editingInvoice: boolean;
}

export const useBillingStore = defineStore("billing", {
  state: (): BillingState => ({
    bills: [],
    billsFiltered: [],
    selectedInvoice: null,
    isLoading: true,
    searchQuery: "",
    loaded: false,
    needRefresh: false,
    successMessage: false,
    editingInvoice: false,
  }),

  getters: {
    billList: (state: BillingState): BillingInterface[] => state.bills,

    filteredBillList(state: BillingState): BillingInterface[] {
      const query = state.searchQuery ? state.searchQuery.toLowerCase() : "";
      return state.bills.filter((bill) => {
        const billerName = bill.billerInfo.billerName
          ? bill.billerInfo.billerName.toLowerCase()
          : "";
        const clientName = bill.clientInfo.clientName
          ? bill.clientInfo.clientName.toLowerCase()
          : "";

        return billerName.includes(query) || clientName.includes(query);
      });
    },
  },


  actions: {
    addBill(bill: BillingInterface) {
      this.bills.push(bill);
      displaySuccessMessage();
    },

    fetchBills() {
      this.isLoading = true;
      const bills = data;
      if (Array.isArray(bills)) {
        this.bills = bills;
      } else {
        this.bills = [bills];
      }
      this.isLoading = false;
    },

    deleteBill(billId: string) {
      this.bills = this.bills.filter((bill) => bill.id !== billId);
      this.needRefresh = true;
      displaySuccessMessage();
    },

    setSearchQuery(query: string) {
      this.searchQuery = query.trim().replace(/\s+/g, " ");
    },

    resetSearchQuery() {
      this.searchQuery = '';
    },
  },
});

export const displaySuccessMessage = () => {
  const billingStore = useBillingStore();
  setTimeout(() => {
    billingStore.successMessage = true;
    setTimeout(() => {
      billingStore.successMessage = false;
    }, 2500);
  }, 250);
};

export function generateInvoiceId(): string {
  const prefix = "FAC"; // le préfixe
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomId = Math.floor(Math.random() * 10000);

  return `${prefix}-${currentDate}-${randomId}`;
}

export function formatDateToFrench(date: string): string {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR");

  return formattedDate;
}

