import { Customer, Invoice, Order } from './exercise.ts';

const getCustomerAdressFormatted = (customer: Customer) =>
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

  const invoice = {
    customerId: customer.customerId,
    name: customer.name,
    address: getCustomerAdressFormatted(customer),
    orders: calcOrdersWithTotal(orders),
    total: calcTotal(orders),
    createdAt: getDateString(),
  };

  return invoice;
};
