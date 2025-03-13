# Refactoring Solution: Inline Function

## Overview

This document explains the **Inline Function** refactoring applied step by step to improve the clarity and maintainability of the `createInvoice` function. The goal was to eliminate unnecessary function abstractions while keeping the code readable.

---

## **Step 1: Removing `getDateString`**

### **Before:**

```ts
const getDateString = () => new Date().toDateString();

createdAt: getDateString(),
```

### **Refactoring:**

Since `getDateString` only returns `new Date().toDateString()`, we can inline it directly into the `createdAt` field.

### **After:**

```ts
createdAt: new Date().toDateString(),
```

---

## **Step 2: Removing `calcTotal`**

### **Before:**

```ts
const calcTotal = (orders: Order[]) =>
  orders.reduce((sum, order) => sum + order.price * order.quantity, 0);

 total: calcTotal(orders),
```

### **Refactoring:**

The function `calcTotal` simply sums up the total price of all orders. We can move this logic directly into `total`.

### **After:**

```ts
total: orders.reduce((sum, order) => sum + order.price * order.quantity, 0),
```

---

## **Step 3: Removing `calcOrderTotal`**

### **Before:**

```ts
const calcOrderTotal = (order: Order) => order.price * order.quantity;

const addOrderTotal = (order: Order) => ({
  ...order,
  total: calcOrderTotal(order),
});
```

### **Refactoring:**

The function `calcOrderTotal` was only used inside `addOrderTotal`, so we replaced its usage with direct multiplication.

### **After:**

```ts
const addOrderTotal = (order: Order) => ({
  ...order,
  total: order.price * order.quantity,
});
```

---

## **Step 4: Removing `calcOrdersWithTotal`**

### **Before:**

```ts
const calcOrdersWithTotal = (orders: Order[]) => orders.map(addOrderTotal);

orders: calcOrdersWithTotal(orders),
```

### **Refactoring:**

Since `calcOrdersWithTotal` was just mapping over `orders`, we can replace its usage with `orders.map(addOrderTotal)` directly inside `createInvoice`.

### **After:**

```ts
orders: orders.map(addOrderTotal),
```

---

## **Step 5: Removing `addOrderTotal`**

### **Before:**

```ts
const addOrderTotal = (order: Order) => ({
  ...order,
  total: order.price * order.quantity,
});

orders: orders.map(addOrderTotal),
```

### **Refactoring:**

Since `addOrderTotal` was only wrapping a simple operation, we replaced it directly in `map()`.

### **After:**

```ts
orders: orders.map(order => ({
  ...order,
  total: order.price * order.quantity,
})),
```

---

## **Step 6: Keeping `formatCustomerAddress`**

Although we applied Inline Function in multiple places, we decided to **keep** `formatCustomerAddress` separate because:

- It involves a long string concatenation that would make `createInvoice` harder to read.
- The function name clearly communicates its purpose, improving maintainability.

```ts
const formatCustomerAddress = (customer: Customer) =>
  `${customer.address.street},\n${customer.address.zip},\n${customer.address.city},\n${customer.address.country}`;
```

---

## **Final Refactored Code**

```ts
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
    orders: orders.map((order) => ({
      ...order,
      total: order.price * order.quantity,
    })),
    total: orders.reduce((sum, order) => sum + order.price * order.quantity, 0),
    createdAt: new Date().toDateString(),
  };
};
```

---

## **Summary of Changes**

✅ Removed unnecessary functions using **Inline Function**.
✅ Improved readability by keeping **formatCustomerAddress** separate.
✅ Made `createInvoice` more direct and clear.
✅ Ensured that all functionality remained the same.

This refactoring removed unnecessary indirection while maintaining clarity and efficiency. 🎯🚀
