export const countVowels = (text: string): void => {
  console.log('Counting vowels...');
  console.log('------------------');

  let vowelCount = 0;
  for (const char of text) {
    if ('aeiouAEIOU'.includes(char)) {
      vowelCount++;
    }
  }

  console.log(`Total vowels: ${vowelCount}`);
};
