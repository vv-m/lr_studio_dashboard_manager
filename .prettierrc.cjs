module.exports = {
  printWidth: 90,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  htmlWhitespaceSensitivity: 'css',
  quoteProps: 'as-needed',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
  ],
};
