# Refactoring Solution: Extract Function

## Overview

This document explains the **Extract Function** refactoring applied step by step to improve the clarity and maintainability of the `countVowels` function. The goal was to separate distinct responsibilities into their own well-named functions.

---

## Step 1: Identifying Separate Responsibilities

In the original code, the `countVowels` function had three distinct responsibilities:

1. Printing a header
2. Calculating the vowel count
3. Displaying the result

Each of these can be extracted into its own function for better organization.

---

## Step 2: Extracting the Header Display

**Before:**

```ts
export const countVowels = (text: string): void => {
  console.log('Counting vowels...');
  console.log('------------------');

  // ... rest of the function
};
```

**Refactoring:**

We extract the header printing into its own function with a descriptive name.

**After:**

```ts
const printHeader = (): void => {
  console.log('Counting vowels...');
  console.log('------------------');
};

export const countVowels = (text: string): void => {
  printHeader();
  // ... rest of the function
};
```

## Step 3: Extracting the Vowel Counting Logic

**Before:**

```ts
export const countVowels = (text: string): void => {
  printHeader();

  let vowelCount = 0;
  for (const char of text) {
    if ('aeiouAEIOU'.includes(char)) {
      vowelCount++;
    }
  }

  // ... rest of the function
};
```

**Refactoring:**

We extract the counting logic into a separate pure function that returns the count.

**After:**

```ts
const countVowelsInText = (text: string): number => {
  let vowelCount = 0;
  for (const char of text) {
    if ('aeiouAEIOU'.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};

export const countVowels = (text: string): void => {
  printHeader();
  const vowelCount = countVowelsInText(text);
  // ... rest of the function
};
```

## Extracting the Result Display

**Before:**

```ts
export const countVowels = (text: string): void => {
  printHeader();
  const vowelCount = countVowelsInText(text);

  console.log(`Total vowels: ${vowelCount}`);
};
```

**Refactoring:**

We extract the result printing into its own function.

**After:**

```ts
const printResult = (vowelCount: number): void => {
  console.log(`Total vowels: ${vowelCount}`);
};

export const countVowels = (text: string): void => {
  printHeader();
  const vowelCount = countVowelsInText(text);
  printResult(vowelCount);
};
```

## Final Refactored Code

```ts
const printHeader = (): void => {
  console.log('Counting vowels...');
  console.log('------------------');
};

const countVowelsInText = (text: string): number => {
  let vowelCount = 0;
  for (const char of text) {
    if ('aeiouAEIOU'.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};

const printResult = (vowelCount: number): void => {
  console.log(`Total vowels: ${vowelCount}`);
};

export const countVowels = (text: string): void => {
  printHeader();
  const vowelCount = countVowelsInText(text);
  printResult(vowelCount);
};
```

## Benefits of This Refactoring

✅ Single Responsibility Principle: Each function now has a single, clear purpose ✅ Improved Readability: The main function now clearly shows the sequence of operations ✅ Better Testability: The pure function countVowelsInText can be tested in isolation ✅ Reusability: Each function can be reused elsewhere if needed ✅ Easier Maintenance: Changes to one aspect won't affect the others

This refactoring transformed a monolithic function into a well-organized set of functions with clear responsibilities. 🎯
