import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      eqeqeq: [2, 'allow-null'], // == 금지
      'array-element-newline': [
        'error',
        {
          ArrayExpression: { multiline: true, minItems: 3 }, // 배열의 요소가 5개 이상일 경우, 각각 한줄씩
        },
      ],
      quotes: [2, 'single', { avoidEscape: false }], // ', `만 허용
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }, // return 앞에는 빈줄 강제
      ],
      camelcase: ['error', { properties: 'never' }], // 카멜케이스 강제
      'space-in-parens': [2, 'never'], // 괄호`()` 안에 공백을 추가하지 않습니다.
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // 빈줄 최대 1개
      'space-before-blocks': [2, 'always'], // 블록 앞에 공백을 강제
      'brace-style': [2, '1tbs', { allowSingleLine: true }], // 중괄호 스타일
      '@typescript-eslint/explicit-module-boundary-types': 0, // 명시적 모듈 바운더리 타입 허용
    },
  },
)