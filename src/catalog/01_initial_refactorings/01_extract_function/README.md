# Extract Function

## What is Extract Function?

Extract Function is a refactoring technique where part of a larger function is moved into a separate function, named according to its task. This improves code readability, reusability, and maintainability by breaking down complex logic into smaller, more focused functions.

## When Should You Apply It?

The main reason for using this refactoring technique is to improve clarity by separating purpose from implementation. If a code section does not immediately reveal its purpose, it may be beneficial to extract it into its own function with a meaningful name.

Other possible reasons:

- A function handles too many different tasks.
- A block of code is repeated in multiple places.
- A function is too long or difficult to understand.
- Readability can be improved by using descriptive function names.

## Example

The following example shows a function that both prints data and performs a calculation. After refactoring, the calculation is moved to a separate function.

### Before Refactoring

```ts
const printInvoice = (invoice: Invoice): void => {
  console.log(`Customer: ${invoice.customer}`);

  let totalAmount = 0;

  for (const item of invoice.items) {
    totalAmount += item.amount;
  }

  console.log(`Total: €${totalAmount}`);
};
```

### After Refactoring

```ts
const calculateTotal = (items: Item[]): number => {
  let totalAmount = 0;

  for (const item of items) {
    totalAmount += item.amount;
  }

  return totalAmount;
};

const printInvoice = (invoice: Invoice): void => {
  console.log(`Customer: ${invoice.customer}`);

  const totalAmount = calculateTotal(invoice.items);

  console.log(`Total: €${totalAmount}`);
};
```

## Benefits

This refactoring technique offers multiple benefits, particularly in terms of readability, reusability, and maintainability. Smaller, well-named functions make the code easier to understand and maintain.

- **Improved Readability**: The code is easier to follow.
- **Reusability**: The extracted function can be used elsewhere.
- **Better Maintainability**: Smaller functions are easier to modify and test.

## How to Apply

1. Identify a block of code that can be extracted.
2. Move it to a new function with a meaningful name that clearly describes its purpose.
3. Replace the original block with a call to the new function.
4. Ensure all tests pass. If necessary, adjust existing tests or create new ones to verify the extracted function.

## Next Steps

Now you can try applying this refactoring yourself! The provided files include pre-written code that you can modify according to the "Extract Function" technique. Use the available tests to check your changes and ensure that your refactoring is correctly implemented.
