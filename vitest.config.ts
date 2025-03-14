import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    dir: 'src',
    include: ['**/*.test.[jt]s'],
    globals: true,
    coverage: {
      include: ['src/**/*.ts'],
    },
  },
});
