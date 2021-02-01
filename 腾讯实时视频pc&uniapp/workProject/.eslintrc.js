module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  plugins: ['html', 'vue'],
  rules: {
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: []
      }
    ],
    'space-before-function-paren': 0,
    'import/first': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    // 'max-len': ['error', { code: 100 }],
    semi: ['error', 'always'],
    'no-undef': 0,
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    curly: [2, 'all'], //必须使用 if(){} 中的{}
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-spacing': ['error', { before: false, after: true }],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'no-unused-vars': 0,
    'no-async-promise-executor': 0,
    'no-constant-condition': 0,
    'no-useless-escape': 0,
    'object-curly-spacing': ['error', 'always'],
    'vue/custom-event-name-casing': 0, // vue中casing事件名称，而不使用驼峰
    'no-empty': 0, // 空代码块
    'vue/no-use-v-if-with-v-for': 0, // v-if和v-for一起用在同一个标签
    'no-prototype-builtins':0 // 不允许直接使用builtin原型链方法
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
};
