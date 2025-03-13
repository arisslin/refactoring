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
