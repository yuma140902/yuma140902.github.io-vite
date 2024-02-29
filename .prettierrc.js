const config = {
  printWidth: 120,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    '^@/assets/(.*)$',
    '^@/src/(.*)$',
    '^@/components/(.*)$',
    '^@/pages/(.*)$',
    '^@/layouts/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
