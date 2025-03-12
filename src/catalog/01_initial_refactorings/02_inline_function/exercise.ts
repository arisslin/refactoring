export type Customer = {
  customerId: string;
  name: string;
  address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
};

export type Order = {
  articleId: string;
  articleName: string;
  quantity: number;
  price: number;
  total?: number;
};

export type Invoice = {
  customerId: string;
  name: string;
  address: string;
  orders: Order[];
  total: number;
  createdAt: string;
};

const formatCustomerAddress = (customer: Customer) =>
  `${customer.address.street},\n${customer.address.zip},\n${customer.address.city},\n${customer.address.country}`;

const calcOrderTotal = (order: Order) => order.price * order.quantity;

const addOrderTotal = (order: Order) => ({
  ...order,
  total: calcOrderTotal(order),
});

const calcOrdersWithTotal = (orders: Order[]) => orders.map(addOrderTotal);

const calcTotal = (orders: Order[]) =>
  orders.reduce((sum, order) => sum + order.price * order.quantity, 0);

const getDateString = () => new Date().toDateString();

export const createInvoice = (
  customer: Customer,
  orders: Order[]
): Invoice | undefined => {
  if (orders.length === 0) {
    return undefined;
  }

  return {
    customerId: customer.customerId,
    name: customer.name,
    address: formatCustomerAddress(customer),
    orders: calcOrdersWithTotal(orders),
    total: calcTotal(orders),
    createdAt: getDateString(),
  };
};
