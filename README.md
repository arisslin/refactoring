# Refactoring

## What is this project?

This open-source project provides a collection of refactoring examples written in TypeScript, inspired by the book _Refactoring_ by Martin Fowler. It helps developers learn various refactoring techniques through practical exercises. We highly appreciate his work in advancing software development practices.

## Project Goal

The goal is to give developers an opportunity to practice refactoring techniques using small, self-contained code examples. Each example consists of:

- a short explanation of the refactoring technique
- an initial code file
- a test suite to verify changes
- a reference solution for guidance

## Reference to the book _Refactoring_ by Martin Fowler

This project follows the catalog from _Refactoring_ by Martin Fowler. The order of refactorings follows the structure described in the book. For detailed explanations and theoretical background, we recommend reading the book.

## How does it work?

1. Clone this repository.
2. Choose a refactoring example from the catalog.
3. Read the explanation of the refactoring technique. 
4. Try to improve the code yourself.
5. Use the existing unit tests to verify your changes.
6. Compare your solution with the provided reference solution.

### File Structure

You will find all examples in the catalog: `src/catalog`.

Each refactoring example is organized in a numbered folder (e.g., `01_extract_function`) and includes the following files:

- README.md (explanation of technique, when to use, examples)
- exercise.ts (code to refactor)
- \*-function.test.ts (test suite)
- solution.ts (reference implementation)
- SOLUTION.md (detailed step-by-step explanation)

## Requirements

To use this project, make sure you have the following installed:

- **Node.js** v22.14.0 or higher
- **npm** (comes with Node.js)
- **Git** (to clone the repository)

This project is platform-independent and should work on any operating system.

## Technologies and Setup

This project uses:

- Node.js
- TypeScript (included with Vitest)
- Vitest for unit tests
- ESLint for code quality, automatically checked before each commit using Husky and lint-staged
- Prettier for code formatting, ensuring a consistent code style

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/refactoring.git
   cd refactoring
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run tests:
   ```sh
   npm test
   ```

### Run a specific test

```sh
npm test -- extract-function
```

## License and Acknowledgment

This project is based on ideas from _Refactoring_ by Martin Fowler. We highly recommend reading the book to gain a full understanding of the techniques. All content is open-source and released under the MIT license.
