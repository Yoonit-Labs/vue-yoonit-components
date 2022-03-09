module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/require-default-prop': 'off',
    'vue/valid-template-root': 'off',
    indent: [
      'error',
      2
    ],
    'one-var': [
      'error',
      {
        var: 'never',
        let: 'never',
        const: 'never'
      }
    ],
    semi: [
      2,
      'never'
    ],
    'arrow-parens': 0,
    'generator-star-spacing': 'off',
    'no-new': 0,
    'no-fallthrough': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/**/*.{spec,test}.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
