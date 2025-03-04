/**
 * Extract Function - Solution with Explanation
 *
 * This file demonstrates the "Extract Function" refactoring pattern applied to the vowel counting problem.
 * We've identified three separate responsibilities in the original function and extracted each into
 * its own specialized function:
 */

/**
 * 1. Print Header Function
 * Responsibility: Display the header/title information.
 * Benefit: Separates UI output from business logic.
 */
const printHeader = (): void => {
  console.log('Counting vowels...');
  console.log('------------------');
};

/**
 * 2. Count Vowels Function
 * Responsibility: Core algorithm that counts vowels in text.
 * Benefit: Pure function that takes input and returns output without side effects.
 * This function could be reused elsewhere or tested independently.
 */
const countVowelsInText = (text: string): number => {
  let vowelCount = 0;
  for (const char of text) {
    if ('aeiouAEIOU'.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};

/**
 * 3. Print Result Function
 * Responsibility: Display the result of the calculation.
 * Benefit: Separates result presentation from computation.
 */
const printResult = (vowelCount: number): void => {
  console.log(`Total vowels: ${vowelCount}`);
};

/**
 * Main Function
 * After refactoring, this function serves as a coordinator that:
 * - Clearly shows the sequence of operations
 * - Is much easier to read and understand
 * - Adheres to the Single Responsibility Principle
 */
export const countVowels = (text: string): void => {
  printHeader();
  const vowelCount = countVowelsInText(text);
  printResult(vowelCount);
};
