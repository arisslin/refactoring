# Inline Function

## What is Inline Function?

Inline Function is a refactoring technique where a separate function is removed, and its code is placed directly in the calling code. This improves readability and reduces unnecessary abstractions, especially when the function:

- Only performs a simple calculation or query.
- Does not significantly improve code readability.
- Is not reused anywhere else.

## When Should You Apply It?

The **Inline Function** refactoring is useful when:

- A function is so small that it does not justify its own abstraction.
- The code becomes simpler and more understandable by removing the function.
- The function’s content is as clear and explicit as its name, providing no additional benefit.
- A group of poorly divided functions exists. These can be merged into a larger function and later extracted in a way that makes sense.
- This technique is particularly useful when a section of code has too many indirections, where almost every function delegates its task to another function. This can make it difficult to follow the logic, as it is spread across many small functions.

### Example

The following function uses a separate function `getBasePrice` that only performs a simple calculation:

#### Before (with an external function)

```ts
const getBasePrice = (price: number, quantity: number): number => {
  return price * quantity;
};

export const calculateDiscount = (price: number, quantity: number): number => {
  return getBasePrice(price, quantity) > 1000 ? price * 0.95 : price;
};
```

After applying the **Inline Function** technique, `getBasePrice` is removed, and its code is placed directly inside `calculateDiscount`:

#### After (after "Inline Function")

```ts
export const calculateDiscount = (price: number, quantity: number): number => {
  return price * quantity > 1000 ? price * 0.95 : price;
};
```

## When Should You Avoid It?

- **If implementing it leads to unexpected difficulties**: If a function uses recursion, has multiple `return` statements, or belongs to another object without access methods, inlining can become problematic. In such cases, it is best to avoid this technique.

- **If it is a polymorphic method**: If a method exists in a class and is overridden by subclasses, it cannot simply be inlined as this would affect the behavior of the subclasses.

### Example of a Polymorphic Method

#### Before (correct use of inheritance & polymorphism)

```ts
class Discount {
  getBasePrice(price: number, quantity: number): number {
    return price * quantity;
  }

  calculateDiscount(price: number, quantity: number): number {
    return this.getBasePrice(price, quantity) > 1000 ? price * 0.95 : price;
  }
}

class SpecialDiscount extends Discount {
  getBasePrice(price: number, quantity: number): number {
    return price * quantity * 0.9; // 10% special discount
  }
}
```

Here, `SpecialDiscount` can override the `getBasePrice` method to adjust the discount logic individually.

#### After (incorrect application of Inline Function)

```ts
class Discount {
  calculateDiscount(price: number, quantity: number): number {
    return price * quantity > 1000 ? price * 0.95 : price;
  }
}

class SpecialDiscount extends Discount {
  // getBasePrice no longer exists -> Overriding is no longer possible!
}
```

🚨 **Problem:**

- `SpecialDiscount` can no longer adjust the discount logic because `getBasePrice` was removed.
- The flexibility provided by inheritance and polymorphism is lost.

➡ **Inline Function should not be applied if a method is overridden by subclasses, as this removes the ability to customize behavior.**

## Benefits

- **Reduction of unnecessary abstractions**: No overhead caused by a separate function.
- **Improved readability**: Fewer jumps in the code.
- **Less complexity**: If the function is only used once, there is no need for an extra abstraction.

## How to Apply It

1. Identify a function that only performs a trivial calculation or query.
2. Copy the function’s code and replace all calls to the function with its actual implementation.
3. Remove the original function.
4. Ensure all tests still pass successfully.

## Your Challenge

Now it's your turn! In the file [exercise.ts](./exercise.ts), you will find an implementation with a function suitable for the "Inline Function" refactoring.

### Your Task:

1. Replace the separate function calls with the actual code of the function.
2. Ensure all tests pass successfully (`npm run test inline-function`).
3. Compare your solution with [solution.ts](./solution.ts).

### Goal:

- Reduce unnecessary functions.
- Make the code clearer and more directly readable.
- Follow the principle of minimal abstraction.

Good luck with your refactoring! 🚀
