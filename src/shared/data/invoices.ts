import type { BillingInterface } from "../interfaces/Billing.interface";

const data: BillingInterface[] = [
  {
    id: 'FAC-001',
    billerInfo: {
      billerName: 'Société de Consultation Juridique',
      billerStreetAdress: '27 Boulevard des Avocats',
      billerCity: 'Lyon',
      billerZipCode: '69003',
      billerCountry: 'France',
    },
    clientInfo: {
      clientName: 'Sophie Dupuis',
      clientStreetAdress: '14 Rue des Contrats',
      clientCity: 'Lyon',
      clientZipCode: '69004',
      clientCountry: 'France',
      clientEmail: 'sophie.dupuis@example.com',
    },
    invoiceInfo: {
      invoiceDate: '2023-06-15',
      paymentMethod: 'Chèque',
      invoiceDescription: 'Consultation Juridique',
    },
    itemInfo: [
      {
        itemName: 'Recherche Juridique',
        qty: '2',
        price: '180',
      },
      {
        itemName: 'Rédaction de Contrat',
        qty: '1',
        price: '350',
      },
    ],
  },
  {
    id: 'FAC-002',
    billerInfo: {
      billerName: 'Agence de Marketing Digital',
      billerStreetAdress: '8 Rue de la Promotion',
      billerCity: 'Marseille',
      billerZipCode: '13001',
      billerCountry: 'France',
    },
    clientInfo: {
      clientName: 'Pauline Martin',
      clientStreetAdress: '22 Avenue du Marketing',
      clientCity: 'Marseille',
      clientZipCode: '13002',
      clientCountry: 'France',
      clientEmail: 'pauline.martin@example.com',
    },
    invoiceInfo: {
      invoiceDate: '2023-07-20',
      paymentMethod: 'Virement Bancaire',
      invoiceDescription: 'Campagne Publicitaire',
    },
    itemInfo: [
      {
        itemName: 'Publicité en Ligne',
        qty: '3',
        price: '250',
      },
    ],
  },
  {
    id: 'FAC-003',
    billerInfo: {
      billerName: 'Atelier de Développement Web',
      billerStreetAdress: '3 Rue du Code',
      billerCity: 'Paris',
      billerZipCode: '75003',
      billerCountry: 'France',
    },
    clientInfo: {
      clientName: 'Thomas Leclerc',
      clientStreetAdress: '10 Avenue des Projets',
      clientCity: 'Paris',
      clientZipCode: '75004',
      clientCountry: 'France',
      clientEmail: 'thomas.leclerc@example.com',
    },
    invoiceInfo: {
      invoiceDate: '2023-08-10',
      paymentMethod: 'Carte Bancaire',
      invoiceDescription: 'Création de Site Web',
    },
    itemInfo: [
      {
        itemName: 'Conception de Site',
        qty: '1',
        price: '1200',
      },
      {
        itemName: 'Maintenance Mensuelle',
        qty: '12',
        price: '100',
      },
    ],
  },
  {
    id: 'FAC-004',
    billerInfo: {
      billerName: 'Cabinet Médical',
      billerStreetAdress: '12 Rue de la Santé',
      billerCity: 'Nice',
      billerZipCode: '06001',
      billerCountry: 'France',
    },
    clientInfo: {
      clientName: 'Isabelle Moreau',
      clientStreetAdress: '15 Avenue de la Guérison',
      clientCity: 'Nice',
      clientZipCode: '06002',
      clientCountry: 'France',
      clientEmail: 'isabelle.moreau@example.com',
    },
    invoiceInfo: {
      invoiceDate: '2023-09-05',
      paymentMethod: 'Chèque Santé',
      invoiceDescription: 'Consultation Médicale',
    },
    itemInfo: [
      {
        itemName: 'Consultation Générale',
        qty: '1',
        price: '80',
      },
      {
        itemName: 'Examens Médicaux',
        qty: '3',
        price: '50',
      },
    ],
  },
];

export default data;