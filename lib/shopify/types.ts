export type Cart = {
    checkoutUrl: '',
    cost: {
        subtotalAmount: { },
    totalAmount: any,
    totalTaxAmount: any
    } ,
    lines:{edges: any} ,
    totalQuantity:number
  }
  export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    price: any;
  };