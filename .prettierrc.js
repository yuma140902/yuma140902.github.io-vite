const config = {
  printWidth: 120,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    '^#root/assets/(.*)$',
    '^#root/src/(.*)$',
    '^#root/components/(.*)$',
    '^#root/pages/(.*)$',
    '^#root/layouts/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
