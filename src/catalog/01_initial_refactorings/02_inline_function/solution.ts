import { Customer, Invoice, Order } from './exercise.ts';

const formatCustomerAddress = (customer: Customer) =>
  `${customer.address.street},\n${customer.address.zip},\n${customer.address.city},\n${customer.address.country}`;

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
    orders: orders.map((order: Order) => ({
      ...order,
      total: order.price * order.quantity,
    })),
    total: orders.reduce((sum, order) => sum + order.price * order.quantity, 0),
    createdAt: new Date().toDateString(),
  };
};
