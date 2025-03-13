import { countVowels as exercise } from './exercise.ts';
import { countVowels as solution } from './solution.ts';

type FunctionToTest = (text: string) => void;

const runTest = (
  functionToTest: FunctionToTest,
  input: string,
  expectedCount: number
) => {
  const consoleLogSpy = vi.spyOn(console, 'log');
  functionToTest(input);
  expect(consoleLogSpy).toHaveBeenCalledWith('Counting vowels...');
  expect(consoleLogSpy).toHaveBeenCalledWith('------------------');
  expect(consoleLogSpy).toHaveBeenCalledWith(`Total vowels: ${expectedCount}`);
  consoleLogSpy.mockRestore();
};

const tests = (functionToTest: FunctionToTest) => {
  it('should count the number of vowels in a string', () => {
    runTest(functionToTest, 'hello world', 3);
  });

  it('should count the number of vowels in an empty string', () => {
    runTest(functionToTest, '', 0);
  });

  it('should count the number of vowels in a string with no vowels', () => {
    runTest(functionToTest, 'bcdfg', 0);
    runTest(functionToTest, 'FTGZL', 0);
  });

  it('should count the number of vowels in a string with only vowels', () => {
    runTest(functionToTest, 'aeiouAEIOU', 10);
  });

  it('should count the number of vowels in a mixed-case string', () => {
    runTest(functionToTest, 'HeLLo WoRlD', 3);
    runTest(functionToTest, 'HeLLO WoRlD', 3);
  });

  it('should handle only english vowels', () => {
    runTest(functionToTest, 'héllo! wörld?', 1);
  });
};

describe('extract function - exercise', () => tests(exercise));

describe('extract function - solution', () => tests(solution));
