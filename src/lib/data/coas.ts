export type COAEntry = {
  id: string;
  productSlug: string;
  productName: string;
  batchNumber: string;
  testedDate: string;
  downloadUrl?: string;
};

export const COAS: COAEntry[] = [
  {
    id: "rtglp-2025-a01",
    productSlug: "rtg-lp",
    productName: "RTG-LP",
    batchNumber: "RTGLP-2025-A01",
    testedDate: "2025-04-01",
  },
  {
    id: "motsc-2025-a02",
    productSlug: "mots-c-10mg",
    productName: "MOTS-c 10MG",
    batchNumber: "MOTSC-2025-A02",
    testedDate: "2025-03-22",
  },
  {
    id: "slk-2025-a09",
    productSlug: "selank-10mg",
    productName: "Selank 10MG",
    batchNumber: "SLK-2025-A09",
    testedDate: "2025-03-15",
  },
  {
    id: "smx-2025-a11",
    productSlug: "semax-10mg",
    productName: "Semax 10MG",
    batchNumber: "SMX-2025-A11",
    testedDate: "2025-03-12",
  },
  {
    id: "tesa-2025-a04",
    productSlug: "tesamorelin-20mg",
    productName: "Tesamorelin 20MG",
    batchNumber: "TESA-2025-A04",
    testedDate: "2025-03-02",
  },
  {
    id: "ghkcu-2025-c03",
    productSlug: "ghk-cu",
    productName: "GHK-Cu",
    batchNumber: "GHKCU-2025-C03",
    testedDate: "2025-02-19",
  },
  {
    id: "bpc157-2025-b07",
    productSlug: "bpc-157",
    productName: "BPC-157",
    batchNumber: "BPC157-2025-B07",
    testedDate: "2025-02-04",
  },
  {
    id: "pt141-2025-a12",
    productSlug: "pt-141-10mg",
    productName: "PT-141 (Bremelanotide) 10MG",
    batchNumber: "PT141-2025-A12",
    testedDate: "2025-01-15",
  },
];

export function formatCOADate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${parseInt(month)}/${parseInt(day)}/${year}`;
}
